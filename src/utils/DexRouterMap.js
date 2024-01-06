const ethers = require("ethers");

class DexRouterMap extends Map {
    constructor(params) {
        super(params);
        return this;
    }

    getDex(dex, version) {
        let byName = Array.from(this.values()).find(e => {
            return version !== undefined
                ? e.version === version && e.name.toLowerCase() === dex.toLowerCase()
                : e.name.toLowerCase() === dex.toLowerCase();
        });
        if (byName)
            return byName;

        let byFactory = Array.from(this.values()).find(e => {
            return version !== undefined
                ? e.version === version && e.factory.toLowerCase() === dex.toLowerCase()
                : e.factory.toLowerCase() === dex.toLowerCase();
        });
        if (byFactory)
            return byFactory;

        let byRouter = Array.from(this.values()).find(e => {
            return version !== undefined
                ? e.version === version && e.router.toLowerCase() === dex.toLowerCase()
                : e.factory.toLowerCase() === dex.toLowerCase();
        });
        if (byRouter)
            return byRouter;
        return;
    }
}
exports.DexRouterMap = DexRouterMap;
