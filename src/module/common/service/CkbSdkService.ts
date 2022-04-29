import {
    CKBBalance,
    ConnectionService,
    Environments,
    WalletService,
    Nft,
    WalletState,
    DAOBalance,
    TransactionType,
    ScriptType,
    DAOUnlockableAmount,
} from "@peersyst/ckb-peersyst-sdk";
import { tokensList, UknownToken } from "module/token/mock/token";
import { DepositInDAOParams, FullTransaction, SendTransactionParams, WithdrawOrUnlockParams } from "./CkbSdkService.types";
import { CKB_URL, INDEXER_URL } from "@env";
import { TokenAmount, TokenType } from "module/token/types";

export function getTokenTypeFromScript(scriptType: ScriptType): TokenType {
    const tokenFound = tokensList.filter((tkn) => tkn.args === scriptType.args && tkn.codeHash === scriptType.codeHash);
    if (tokenFound.length > 0) {
        return tokenFound[0];
    }
    return { ...UknownToken, ...scriptType };
}

export const connectionService = new ConnectionService(CKB_URL, INDEXER_URL, Environments.Testnet);

export class CKBSDKService {
    private connectionService: ConnectionService;
    private wallet: WalletService;

    constructor(mnemonic: string, walletState?: WalletState, onSync?: (walletState: WalletState) => Promise<void>) {
        this.connectionService = connectionService;
        this.wallet = new WalletService(this.connectionService, mnemonic, walletState, onSync);
    }

    async synchronize(): Promise<WalletState> {
        return this.wallet.synchronize();
    }

    getCKBBalance(): CKBBalance {
        const { totalBalance, occupiedBalance, freeBalance } = this.wallet.getCKBBalance();
        return {
            totalBalance: totalBalance / BigInt(10 ** 8),
            occupiedBalance: occupiedBalance / BigInt(10 ** 8),
            freeBalance: freeBalance / BigInt(10 ** 8),
        };
    }

    async getDAOBalance(): Promise<DAOBalance> {
        const { daoDeposit, daoCompensation } = await this.wallet.getDAOBalance();
        return { daoDeposit: daoDeposit / BigInt(10 ** 8), daoCompensation: daoCompensation / BigInt(10 ** 8) };
    }

    getTransactions(): FullTransaction[] {
        const fullTxs: FullTransaction[] = [];
        const transactions = this.wallet.getTransactions();
        for (const tx of transactions) {
            if ([TransactionType.RECEIVE_TOKEN, TransactionType.SEND_TOKEN].includes(tx.type) && tx.scriptType) {
                fullTxs.push({ ...tx, token: getTokenTypeFromScript(tx.scriptType).tokenName });
            } else {
                fullTxs.push(tx);
            }
        }
        return fullTxs;
    }

    getTokensBalance(): TokenAmount[] {
        const tokens = this.wallet.getTokensBalance();
        const tokenAmounts: TokenAmount[] = [];
        for (const token of tokens) {
            tokenAmounts.push({ amount: token.amount, type: getTokenTypeFromScript(token.type) });
        }
        return tokenAmounts;
    }

    async getNfts(): Promise<Nft[]> {
        await this.synchronize();
        return this.wallet.getNftsBalance();
    }

    getAddress(): string {
        return this.wallet.getNextAddress();
    }

    async sendTransaction(params: SendTransactionParams): Promise<string> {
        return this.wallet.sendTransaction(BigInt(params.amount), params.mnemonic.join(" "), params.to, params.feeRate);
    }

    async depositInDAO(params: DepositInDAOParams): Promise<string> {
        return await this.wallet.depositInDAO(BigInt(params.amount), params.mnemonic.join(" "), params.feeRate);
    }

    async getDAOUnlockableAmounts(): Promise<DAOUnlockableAmount[]> {
        return this.wallet.getDAOUnlockableAmounts();
    }

    async withdrawOrUnlock({ unlockableAmount, mnemonic }: WithdrawOrUnlockParams): Promise<string> {
        try {
            const txHash = await this.wallet.withdrawOrUnlock(unlockableAmount, mnemonic.join(" "));
            return txHash;
        } catch (err) {
            console.log("error");
            console.log(err.name);
            console.log(err.message);
            // console.log(err.stack);
        }
        return "";
    }
}