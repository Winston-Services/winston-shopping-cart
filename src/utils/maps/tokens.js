const { TokenMap } = require("../../utils/TokenMap");

//token mapping for all networks.
const tokens = {
    WIN: new TokenMap(),
    BNB: new TokenMap(),
    ETH: new TokenMap(),
    MATIC: new TokenMap(),
    GNOSIS:new TokenMap(),
};
exports.tokens = tokens;
