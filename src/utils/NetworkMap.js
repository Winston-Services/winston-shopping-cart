class NetworkMap extends Map {
    constructor(props) {
        super(props);
        return this;
    }
    getNetwork(name) {
        let byName = Array.from(this.values()).find(
            e => e.name.toLowerCase() === name.toLowerCase()
        );
        if (byName)
            return byName;

        let bySymbol = Array.from(this.values()).find(
            e => e.symbol.toLowerCase() === name.toLowerCase()
        );
        if (bySymbol)
            return bySymbol;

        let byChainId = Array.from(this.values()).find(
            e => Number(e.chainId) === Number(name)
        );
        if (byChainId)
            return byChainId;

        return;
    }

}
exports.NetworkMap = NetworkMap;
