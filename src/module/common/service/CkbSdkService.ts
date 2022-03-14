import { CKBBalance, ConnectionService, Environments, WalletService } from "@peersyst/ckb-peersyst-sdk";

export class CKBSDKService {
    private readonly ckbUrl = "http://78.46.174.87:8114/rpc";
    private readonly indexerUrl = "http://78.46.174.87:8114/indexer";
    private connectionService: ConnectionService;
    private wallet: WalletService;

    constructor(mnemonic: string) {
        this.connectionService = new ConnectionService(this.ckbUrl, this.indexerUrl, Environments.Testnet);
        this.wallet = new WalletService(this.connectionService, mnemonic);
    }

    async getCKBBalance(): Promise<CKBBalance> {
        return this.wallet.getCKBBalance();
    }
}
