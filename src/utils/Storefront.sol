// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../lib/OpenZeppelin/access/Ownable.sol";
import "../lib/OpenZeppelin/token/ERC20/IERC20.sol";
import "../lib/OpenZeppelin/token/ERC20/utils/SafeERC20.sol";
import "../lib/OpenZeppelin/utils/ReentrancyGuard.sol";

contract Storefront is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;
    
    // Struct representing an item
    struct Item {
        string name;          // Name of the item
        uint256 price;        // Price of the item (in wei)
        int16 inventory;      // Inventory quantity available (negative value means backordered)
        bool allowPurchases;  // Allow purchases
        bool allowBackorders; // Allow backorder
    }

    address public payRecipient; // Address to receive payments
    
    // Mapping of SKUs to items
    mapping(string => Item) public items;

    event ItemCreated(
        string sku,
        string name,
        uint256 price,
        int16 inventory,
        bool allowPurchases,
        bool allowBackorders
    );
    event ItemUpdated(
        string sku,
        string name,
        uint256 price,
        int16 inventory,
        bool allowPurchases,
        bool allowBackorders
    );
    event ItemDeleted(string sku);
    event ItemPurchased(string sku, uint256 price, uint16 quantity, uint256 paymentAmount);
    event PayRecipientSet(address payRecipient);

    error ItemDoesNotExist();
    error ItemAlreadyExists();
    error IncorrectPaymentAmount();
    error ItemOutOfStock();
    error StringCannotBeEmpty();
    error ValueCannotBeZero();
    error NoChange();
    error PurchasesNotAllowed();

    constructor (address _payRecipient) {
        if (_payRecipient == address(0)) {
            revert ValueCannotBeZero();
        }

        payRecipient = _payRecipient;
    }

    // Function to add a new item to the marketplace
    function createItem(
        string memory _sku,
        string memory _name,
        uint256 _price,
        int16 _inventory,
        bool _allowPurchases,
        bool _allowBackorders
    ) external onlyOwner {

        if (bytes(_sku).length == 0 
            || bytes(_name).length == 0
        ) {
            revert StringCannotBeEmpty();
        }

        if (_price == 0) {
            revert ValueCannotBeZero();
        }

        if (items[_sku].price > 0) {
            revert ItemAlreadyExists();
        }

        // Note: We are allowing the owner to add an item with an inventory of 0

        // Add the item to the store
        items[_sku] = Item({
            name: _name,
            price: _price,
            inventory: _inventory,
            allowPurchases: _allowPurchases,
            allowBackorders: _allowBackorders
        });

        emit ItemCreated(_sku, _name, _price, _inventory, _allowPurchases, _allowBackorders);
    }

    function updateItemName(string memory _sku, string memory _name) public onlyOwner {
        Item storage _item = items[_sku];
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        if (compareStrings(_name, _item.name)) {
            revert NoChange();
        }

        if (bytes(_name).length == 0) {
            revert StringCannotBeEmpty();
        }

        items[_sku].name = _name;
    }

    function updateItemPrice(string memory _sku, uint256 _price) public onlyOwner {
        Item memory _item = items[_sku];
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        if (_price == _item.price) {
            revert NoChange();
        }

        items[_sku].price = _price;
    }

    function updateItemInventory(string memory _sku, int16 _inventory) public onlyOwner {
        Item memory _item = items[_sku];
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        if (_inventory == _item.inventory) {
            revert NoChange();
        }

        items[_sku].inventory = _inventory;
    }

    function updateItemAllowPurchases(string memory _sku, bool _allowPurchases) public onlyOwner {
        Item memory _item = items[_sku];
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        if (_allowPurchases == _item.allowPurchases) {
            revert NoChange();
        }

        items[_sku].allowPurchases = _allowPurchases;
    }

    function updateItemAllowBackorders(string memory _sku, bool _allowBackorders) public onlyOwner {
        Item memory _item = items[_sku];
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        if (_allowBackorders == _item.allowBackorders) {
            revert NoChange();
        }

        items[_sku].allowBackorders = _allowBackorders;
    }

    function updateItem(
        string memory _sku,
        string memory _name,
        uint256 _price,
        int16 _inventory, // -32768 to 32767
        bool _allowPurchases,
        bool _allowBackorders
    ) external onlyOwner {
        updateItemName(_sku, _name);
        updateItemPrice(_sku, _price);
        updateItemInventory(_sku, _inventory);
        updateItemAllowPurchases(_sku, _allowPurchases);
        updateItemAllowBackorders(_sku, _allowBackorders);
    }

    // Function to purchase an item
    function purchaseItem(string memory _sku, uint16 _quantity) external payable nonReentrant {
        
        // Load the item from storage to memory
        Item memory _item = items[_sku];
        
        // Ensure the item exists
        if (_item.price == 0) {
            revert ItemDoesNotExist();
        }

        // Ensure the quantity is greater than 0
        if (_quantity == 0) {
            revert ValueCannotBeZero();
        }

        // Ensure purchases are allowed
        if (!_item.allowPurchases) {
            revert PurchasesNotAllowed();
        }

        // Check if inventory is negative and backorders are not allowed
        int16 _inventoryAfterPurchase = _item.inventory - int16(_quantity);
        if (_inventoryAfterPurchase < 0 
            && !_item.allowBackorders
        ) {
            revert ItemOutOfStock();
        }

        // Ensure the correct payment amount
        uint256 _paymentAmount = _item.price * _quantity;
        if (msg.value != _paymentAmount) {
            revert IncorrectPaymentAmount();
        }

        // Update the item in storage
        items[_sku].inventory = _inventoryAfterPurchase;

        // Emit the event
        emit ItemPurchased(_sku, _item.price, _quantity, _paymentAmount);

        // Transfer the funds to the owner
        payable(payRecipient).transfer(msg.value);
    }

    function deleteItem(string memory _sku) public onlyOwner {
        if (items[_sku].price == 0) {
            revert ItemDoesNotExist();
        }

        // Remove the item from the store
        delete items[_sku];

        // Emit the event
        emit ItemDeleted(_sku);
    }

    // Function to get item details
    function getItem(string memory _sku) external view returns (string memory, uint256, int16, bool, bool) {
        Item memory _item = items[_sku];
        return (_item.name, _item.price, _item.inventory, _item.allowPurchases, _item.allowBackorders);
    }

    // Function to set the pay recipient
    function setPayRecipient(address _payRecipient) public onlyOwner {
        if (_payRecipient == address(0)) {
            revert ValueCannotBeZero();
        }
        
        if (_payRecipient == payRecipient) {
            revert NoChange();
        }

        // Update the pay recipient
        payRecipient = _payRecipient;

        // Emit the event
        emit PayRecipientSet(_payRecipient);
    }

    // Utility function to compare two strings
    function compareStrings(string memory a, string storage b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    // Emergency withdraw function, in case of stuck funds
    function emergencyWithdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
