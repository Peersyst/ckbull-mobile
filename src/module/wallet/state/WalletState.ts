import { atom } from "recoil";
import { StorageWallet } from "module/wallet/WalletStorage";
import { CKBSDKService } from "module/common/service/CkbSdkService";

export const serviceInstancesMap = new Map<number, { testnet: CKBSDKService; mainnet: CKBSDKService }>();

export type Wallet = Omit<StorageWallet, "mnemonic"> & {
    /**
     * Main loading state. Apart from the cells, it also loads the transactions
     */
    synchronizing?: boolean;
    /**
     * Loading the cells to cpmpute the CKBalance, the DAOBalance, tokens
     */
    synchronizingCells?: boolean;
};

export interface WalletState {
    hasWallet: boolean;
    isAuthenticated: boolean;
    wallets: Wallet[];
    isFirstTime: boolean;
    selectedWallet?: number;
}

const walletState = atom<WalletState>({
    key: "wallet",
    default: { hasWallet: false, isAuthenticated: false, isFirstTime: false, wallets: [] },
});

export default walletState;
