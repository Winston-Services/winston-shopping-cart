const { DexRouterMap } = require("../../utils/DexRouterMap");

// dex router mapping for all networks.
const routers = {
  WIN: new DexRouterMap(),
  BNB: new DexRouterMap(),
  ETH: new DexRouterMap(),
  MATIC: new DexRouterMap(),
  GNOSIS: new DexRouterMap()
};
exports.routers = routers;
