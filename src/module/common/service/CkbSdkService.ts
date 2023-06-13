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
    Transaction,
} from "ckb-peersyst-sdk";
import { tokensList, UknownToken } from "module/token/mock/token";
import {
    AmountFromTransactionParams,
    Chain,
    DepositInDAOParams,
    FullTransaction,
    GetNftFromPartialTransactionParams,
    GetTransactionTypeParams,
    SendTransactionParams,
    SignPartialTransactionParams,
    TransferNftParams,
    TransferTokensParams,
    WithdrawOrUnlockParams,
} from "./CkbSdkService.types";
import { TokenAmount, TokenType } from "module/token/types";
import { config } from "config";

export function getTokenIndexTypeFromScript(scriptType: ScriptType): number {
    return tokensList.findIndex((tkn) => tkn.args === scriptType.args && tkn.codeHash === scriptType.codeHash);
}

export function getTokenTypeFromIndex(tokenIndex: number, scriptType?: ScriptType): TokenType {
    if (tokenIndex !== -1) {
        return tokensList[tokenIndex];
    }
    return { ...UknownToken, ...scriptType };
}

export function getTokenTypeFromScript(scriptType: ScriptType) {
    const tokenIndex = getTokenIndexTypeFromScript(scriptType);
    return getTokenTypeFromIndex(tokenIndex, scriptType);
}

export const MAIN_TRANSACTION_TYPES = [
    TransactionType.SEND_NATIVE_TOKEN,
    TransactionType.RECEIVE_NATIVE_TOKEN,
    TransactionType.SEND_NFT,
    TransactionType.RECEIVE_NFT,
    TransactionType.SEND_TOKEN,
    TransactionType.RECEIVE_TOKEN,
    TransactionType.SMART_CONTRACT_RECEIVE,
    TransactionType.SMART_CONTRACT_SEND,
];

export const testnetConnectionService = new ConnectionService(config.ckbTestnetUrl, config.indexerTestnetUrl, Environments.Testnet);
export const mainnetConnectionService = new ConnectionService(config.ckbMainnetUrl, config.indexerMainnetUrl, Environments.Mainnet);

export class CKBSDKService {
    private connectionService: ConnectionService;
    private wallet: WalletService;

    constructor(
        chain: Chain,
        mnemonic: string,
        walletState?: WalletState,
        onSync?: (walletState?: WalletState) => Promise<void>,
        onSyncStart?: () => void,
    ) {
        this.connectionService = chain === "testnet" ? testnetConnectionService : mainnetConnectionService;
        this.wallet = new WalletService(this.connectionService, mnemonic, walletState, onSync, onSyncStart);
    }

    static getFullTransactionFromTransaction(transaction: Transaction): FullTransaction {
        if ([TransactionType.RECEIVE_TOKEN, TransactionType.SEND_TOKEN].includes(transaction.type) && transaction.scriptType) {
            const tokenType = getTokenTypeFromScript(transaction.scriptType);
            return {
                ...transaction,
                token: tokenType.tokenName,
                tokenType,
            };
        }
        return transaction;
    }

    async synchronize(): Promise<WalletState> {
        return this.wallet.synchronize();
    }

    getCKBBalance(): CKBBalance {
        return this.wallet.getCKBBalance();
    }

    async getDAOBalance(): Promise<DAOBalance> {
        return this.wallet.getDAOBalance();
    }

    getTransactions(): FullTransaction[] {
        const transactions = this.wallet.getTransactions();
        return transactions.map((tx) => CKBSDKService.getFullTransactionFromTransaction(tx));
    }

    async getTransaction(txHash: string): Promise<FullTransaction> {
        const transaction = await this.wallet.getTransactionFromHash(txHash);
        return CKBSDKService.getFullTransactionFromTransaction(transaction);
    }

    getTokensBalance(): TokenAmount[] {
        const tokens = this.wallet.getTokensBalance();

        const tokenAmounts: TokenAmount[] = tokensList.map((_, i) => ({ type: tokensList[i], amount: 0 }));

        for (const token of tokens) {
            const tokenIndex = getTokenIndexTypeFromScript(token.type);
            //Supported Token
            if (tokenIndex !== -1) {
                tokenAmounts[tokenIndex].amount = token.amount;
            }
        }
        return tokenAmounts;
    }

    getNfts(): Promise<Nft[]> {
        return this.wallet.getNftsBalance();
    }

    getAddress(): string {
        return this.wallet.getNextAddress();
    }

    async sendTransaction(params: SendTransactionParams): Promise<string> {
        return this.wallet.sendTransaction(BigInt(params.amount), params.mnemonic.join(" "), params.to, params.feeRate);
    }

    async sendToken(params: TransferTokensParams): Promise<string> {
        return this.wallet.transferTokens(BigInt(params.amount), params.mnemonic.join(" "), params.to, params.tokenArgs, params.feeRate);
    }

    async sendNft(params: TransferNftParams): Promise<string> {
        return this.wallet.transferNfts(params.mnemonic.join(" "), params.to, params.nft, params.feeRate);
    }

    async depositInDAO(params: DepositInDAOParams): Promise<string> {
        return await this.wallet.depositInDAO(BigInt(params.amount), params.mnemonic.join(" "), params.feeRate);
    }

    async getDAOUnlockableAmounts(): Promise<DAOUnlockableAmount[]> {
        return this.wallet.getDAOUnlockableAmounts();
    }

    async withdrawOrUnlock({ unlockableAmount, mnemonic }: WithdrawOrUnlockParams): Promise<string> {
        return this.wallet.withdrawOrUnlock(unlockableAmount, mnemonic.join(" "));
    }

    async getTransactionSkeletonType({ transaction }: GetTransactionTypeParams) {
        return await this.wallet.getPartialTransactionTypeFromOutput(transaction);
    }

    async getNftFromPartialTransaction({ transaction }: GetNftFromPartialTransactionParams): Promise<Nft | null> {
        return await this.wallet.getNftFromPartialTransaction(transaction);
    }

    async fillAndSignPartialTransaction({ transaction, mnemonic, feeRate }: SignPartialTransactionParams): Promise<string> {
        return await this.wallet.fillAndSignPartialTransaction(transaction, mnemonic.join(" "), feeRate);
    }

    getAmountFromTransaction({ transaction }: AmountFromTransactionParams): bigint {
        return this.wallet.getAmountFromTransaction(transaction);
    }

    getOutputAddressesFromTransaction({ transaction }: AmountFromTransactionParams): string[] {
        const outputs = transaction.get("outputs");
        console.log(JSON.stringify(outputs, null, 2));

        try {
            return outputs.map((output) => this.connectionService.getAddressFromLock(output.cellOutput.lock)).toArray();
        } catch (e) {
            console.log(e);
        }
        return [];
    }

    getInputAddressesFromTransaction({ transaction }: AmountFromTransactionParams): string[] {
        const inputs = transaction.get("inputs");
        return inputs.map((input) => this.connectionService.getAddressFromLock(input.cellOutput.lock)).toArray();
    }
}
