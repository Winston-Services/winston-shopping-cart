class TokenMap extends Map {
    constructor(params) {
        super(params);
        return this;
    }

    getToken(token = '') {
        // console.log(this, token);
        let byName = Array.from(this.values()).find(
            e => e.name.toLowerCase() === token.toLowerCase()
        );
        if (byName)
            return byName;

        let bySymbol = Array.from(this.values()).find(
            e => e.symbol.toLowerCase() === token.toLowerCase()
        );
        if (bySymbol)
            return bySymbol;

        let byContractAddress = Array.from(this.values()).find(
            e => e.contractAddress === token
        );
        if (byContractAddress)
            return byContractAddress;
        return;
    }
}
exports.TokenMap = TokenMap;
