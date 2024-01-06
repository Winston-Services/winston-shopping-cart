const ethers = require("ethers");
const { AbiDownloadHandler } = require("./AbiDownloadHandler");

class DexRouterRecord {
  constructor({ name = "", factory = "", router = "", version = "" }) {
    this._name = name;
    this._factoryAddress = factory;
    this._routerAddress = router;
    this._version = version;
  }

  _name;

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  _factoryAddress;

  get factoryAddress() {
    return this._factoryAddress;
  }
  set factoryAddress(value) {
    this._factoryAddress = value;
  }

  _routerAddress;

  get routerAddress() {
    return this._routerAddress;
  }
  set routerAddress(value) {
    this._routerAddress = value;
  }

  _version;

  get version() {
    return this._version;
  }
  set version(value) {
    this._version = value;
  }

  _network;
  
  get network() {
    return this._network;
  }
  set network(value) {
    this._network = value;
  }
  
  _provider;
  
  get provider() {
    return this._provider;
  }
  set provider(value) {
    this._provider = value;
  }

  async abi() {
    const tokenABIHandler = new AbiDownloadHandler();
    return await tokenABIHandler.download(
      this.network.name,
      this.routerAddress,
      "assets/contracts/abi/{NETWORK}/{CONTRACT_ADDRESS}.json"
    );
  }

  async contract() {
    if (!this.provider) {
      throw Error("A provider is required to get this contract.");
    }

    return new ethers.Contract(
      this.routerAddress,
      await this.abi(),
      this.provider
    );
  }

  async getTokenPrice(
    inputCurrency,
    outputCurrency,
    inputAmount = 1,
    decimals = 18
  ) {
    const router = await this.contract();
    const amounts = router.getAmountsOut(
      ethers.utils.parseUnits(inputAmount.toString(), Number(decimals)),
      [inputCurrency, outputCurrency]
    );
    return amounts;
  }

  async router() {
    this.provider = this.network.provider();
    return {
      getTokenPrice: (
        inputCurrency,
        outputCurrency,
        inputAmount = 1,
        decimals = 18
      ) =>
        this.getTokenPrice(inputCurrency, outputCurrency, inputAmount, decimals)
    };
  }
}
exports.DexRouterRecord = DexRouterRecord;
