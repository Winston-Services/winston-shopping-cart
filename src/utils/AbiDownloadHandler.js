const fs = require("fs");
const path = require("path");
const { networks } = require("../data/maps/networks");

class AbiDownloadHandler {
    async download(
        network,
        contractAddress,
        savePath = "assets/contracts/abi/{NETWORK}/{CONTRACT_ADDRESS}.json"
    ) {
        //fetch the contract ABI from the Explorer Provider.
        //AN API Key is not required, but advised for speed.
        let abiPath = savePath
            .replace("{NETWORK}", network)
            .replace("{CONTRACT_ADDRESS}", contractAddress);
        if (fs.existsSync(path.resolve(abiPath))) {
            return Promise.resolve(
                JSON.parse(fs.readFileSync(path.resolve(abiPath)))
            );
        } else {
            // console.log("ABI Downloader Loading ", network, contractAddress);
            const contractABI = networks
                .getNetwork(network)
                .fetchABI(contractAddress);
                
            try {
                fs.mkdirSync(path.dirname(abiPath), { recursive: true });
                fs.writeFileSync(abiPath, (await contractABI).result, {mode: '0755', flag:'a'});
                return Promise.resolve(
                    JSON.parse(fs.readFileSync(path.resolve(abiPath)))
                );
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }

    isDownloaded(network, contractAddress) {
        const savePath = "assets/contracts/abi/{NETWORK}/{CONTRACT_ADDRESS}.json";
        let abiPath = savePath
            .replace("{NETWORK}", network)
            .replace("{CONTRACT_ADDRESS}", contractAddress);
        if (fs.existsSync(path.resolve(abiPath))) {
            return true;
        }
        return false;
    }
}
exports.AbiDownloadHandler = AbiDownloadHandler;
