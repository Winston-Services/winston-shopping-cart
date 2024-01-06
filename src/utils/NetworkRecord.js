const { ethers } = require("ethers");
const fetch = require("node-fetch");

// lets add the network information we want to connect to.
class NetworkRecord {
  constructor({
    name = "",
    symbol = "",
    chainId = "",
    rpcUrl = "",
    wsUrl = "",
    explorerUrl = "",
    explorerAPIKey = "",
    apiUrl = "",
    apiKey = "",
    aggregator = "",
    crosschainCapable = ""
  }) {
    this._name = name;
    this._symbol = symbol;
    this._chainId = chainId;
    this._rpcUrl = rpcUrl;
    this._wsUrl = wsUrl;
    this._explorerUrl = explorerUrl;
    this._explorerAPIKey = explorerAPIKey;
    this._apiUrl = apiUrl;
    this._apiKey = apiKey;
    this._aggregator = aggregator;
    this._crosschainCapable = crosschainCapable;
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

  _chainId;

  get chainId() {
    return this._chainId;
  }
  set chainId(value) {
    this._chainId = value;
  }

  _rpcUrl;

  get rpcUrl() {
    return this._rpcUrl;
  }
  set rpcUrl(value) {
    this._rpcUrl = value;
  }

  _wsUrl;

  get wsUrl() {
    return this._wsUrl;
  }
  set wsUrl(value) {
    this._wsUrl = value;
  }

  _explorerUrl;

  get explorerUrl() {
    return this._explorerUrl;
  }
  set explorerUrl(value) {
    this._explorerUrl = value;
  }

  _apiUrl;

  get apiUrl() {
    return this._apiUrl.replace("{API_KEY}", this.apiKey);
  }

  set apiUrl(value) {
    this._apiUrl = value;
  }

  _apiKey;

  get apiKey() {
    return this._apiKey;
  }
  set apiKey(value) {
    this._apiKey = value;
  }

  _aggregator;

  get aggregator() {
    return this._aggregator;
  }
  set aggregator(value) {
    this._aggregator = value;
  }

  _crosschainCapable;

  get crosschainCapable() {
    return this._crosschainCapable;
  }
  set crosschainCapable(value) {
    this._crosschainCapable = value;
  }

  provider() {
    if (typeof window !== "undefined") {
      //get the web3 provider from the window object
      return new ethers.providers.Web3Provider(window.ethereum);
    } else {
      //lets see if the network exists
      // Advanced Feature : JSON | WS | RPC
      //if it has more than one type of connection.
      const networkProviderRecord = {
        chainId: Number(this.chainId),
        symbol: this.symbol // add option api settings and credentials
      };
      // Standard Feature : JSON
      
      return new ethers.providers.JsonRpcProvider(
        this.rpcUrl,
        networkProviderRecord
      );
    }
  }

  fetchABI(contractAddress) {
    // "https://api.bscscan.com/api?module=contract&action=getabi&address={CONTRACT_ADDRESS}&apikey={apiKey}"
    let formatedURL = this.apiUrl.replace(
      "{CONTRACT_ADDRESS}",
      contractAddress
    );
    return fetch(formatedURL).then(response => response.json()).catch(error => error);
  }
}
exports.NetworkRecord = NetworkRecord;
