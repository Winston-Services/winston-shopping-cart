const { ethers } = require("ethers");
const { AbiDownloadHandler } = require("./AbiDownloadHandler");

class TokenRecord {
  constructor({
    network = "",
    name = "",
    symbol = "",
    decimals = 18,
    contractAddress = "",
    isProxy = "",
    isTaxToken = "",
    isNative = ""
  }) {
    this._network = network;
    this._name = name;
    this._symbol = symbol;
    this._decimals = decimals;
    this._contractAddress = contractAddress;
    this._isProxy = isProxy;
    this._isTaxToken = isTaxToken;
    this._isNative = isNative;
  }

  _network;

  get network() {
    return this._network;
  }
  set network(value) {
    this._network = value;
  }

  _name;

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  _symbol;

  get symbol() {
    return this._symbol;
  }
  set symbol(value) {
    this._symbol = value;
  }

  _decimals;
  
  get decimals() {
    return this._decimals;
  }
  set decimals(value) {
    this._decimals = value;
  }
  
  _contractAddress;

  get contractAddress() {
    return this._contractAddress;
  }
  set contractAddress(value) {
    this._contractAddress = value;
  }

  _isProxy;

  get isProxy() {
    return this._isProxy;
  }
  set isProxy(value) {
    this._isProxy = value;
  }

  _isTaxToken;

  get isTaxToken() {
    return this._isTaxToken;
  }
  set isTaxToken(value) {
    this._isTaxToken = value;
  }

  _isNative;

  get isNative() {
    return this._isNative;
  }
  set isNative(value) {
    this._isNative = value;
  }

  async abi() {
    const tokenABIHandler = new AbiDownloadHandler();
    return await tokenABIHandler.download(
      this.network.name,
      this.contractAddress,
      "assets/contracts/abi/{NETWORK}/{CONTRACT_ADDRESS}.json"
    );
  }

  async contract() {
    return new ethers.Contract(
      this.contractAddress,
      await this.abi(),
      this.network.provider()
    );
  }
}
exports.TokenRecord = TokenRecord;
