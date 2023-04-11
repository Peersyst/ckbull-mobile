import { mnemonic, ExtendedPrivateKey, AccountExtendedPublicKey, AddressType } from "@ckb-lumos/hd";
import { TransactionSkeletonType, TransactionSkeleton } from "@ckb-lumos/helpers";
import { HashType, utils, Transaction as LumosTx } from "@ckb-lumos/lumos";
import { TransactionWithStatus } from "@ckb-lumos/base";
import { common, dao } from "@ckb-lumos/common-scripts";
import { ConnectionService } from "./connection.service";
import { TransactionService, Transaction, FeeRate, TransactionType, ScriptType } from "./transaction.service";
import { TokenService, TokenAmount } from "./assets/token.service";
import { CKBBalance, CKBService } from "./assets/ckb.service";
import { DAOBalance, DAOService, DAOStatistics, DAOUnlockableAmount } from "./dao/dao.service";
import { Cell, Script } from "@ckb-lumos/lumos";
import { QueryOptions } from "@ckb-lumos/base";
import { Nft, NftService } from "./assets/nft.service";
import { Logger } from "../utils/logger";

export enum AddressScriptType {
    SECP256K1_BLAKE160 = "SECP256K1_BLAKE160",
    SUDT = "SUDT",
    DAO = "DAO",
}

export interface Balance {
    ckb: CKBBalance;
    tokens: TokenAmount[];
    nfts: Nft[];
    dao: DAOBalance;
}

export interface addressMapI {
    [key: string]: string;
}

export interface cellMapI {
    [key: string]: Cell[];
}

export interface transactionMapI {
    [key: string]: Transaction[];
}

export interface WalletState {
    addressMap: addressMapI;
    firstRIndexWithoutTxs: number;
    firstCIndexWithoutTxs: number;
    lastHashBlock: string;
    accountCellsMap: cellMapI;
    accountTransactionMap: transactionMapI;
}

export class WalletService {
    private readonly connection: ConnectionService;
    private readonly transactionService: TransactionService;
    private readonly ckbService: CKBService;
    private readonly tokenService: TokenService;
    private readonly daoService: DAOService;
    private readonly nftService: NftService;
    private readonly accountPublicKey: AccountExtendedPublicKey;
    private readonly logger = new Logger(WalletService.name);
    private addressMap: addressMapI = {};
    private firstRIndexWithoutTxs = 0;
    private firstCIndexWithoutTxs = 0;
    private lastHashBlock!: string;
    private accountCellsMap: cellMapI = {};
    private accountTransactionMap: transactionMapI = {};
    private onSync!: (walletState?: WalletState) => Promise<void>;
    private onSyncStart!: () => void;
    private synchronizing = false;

    constructor(
        connectionService: ConnectionService,
        mnemo: string,
        walletState?: WalletState,
        onSync?: (walletState?: WalletState) => Promise<void>,
        onSyncStart?: () => void,
    ) {
        if (!WalletService.validateMnemonic(mnemo)) {
            this.logger.error("Invalid Mnemonic");
            throw new Error("Invalid Mnemonic");
        }

        this.connection = connectionService;
        this.nftService = new NftService(this.connection);
        this.transactionService = new TransactionService(this.connection, this.nftService);
        this.nftService.setTransactionService(this.transactionService);
        this.ckbService = new CKBService(this.connection, this.transactionService);
        this.tokenService = new TokenService(this.connection, this.transactionService);
        this.daoService = new DAOService(this.connection, this.transactionService);

        if (walletState) {
            this.addressMap = walletState.addressMap ? { ...walletState.addressMap } : this.addressMap;
            this.firstRIndexWithoutTxs = walletState.firstRIndexWithoutTxs || 0;
            this.firstCIndexWithoutTxs = walletState.firstCIndexWithoutTxs || 0;
            this.lastHashBlock = walletState.lastHashBlock || null!;
            this.accountCellsMap = walletState.accountCellsMap ? { ...walletState.accountCellsMap } : this.accountCellsMap;
            this.accountTransactionMap = walletState.accountTransactionMap
                ? { ...walletState.accountTransactionMap }
                : this.accountTransactionMap;
        }

        if (onSync) {
            this.onSync = onSync;
        }
        if (onSyncStart) {
            this.onSyncStart = onSyncStart;
        }

        this.accountPublicKey = WalletService.getPrivateKeyFromMnemonic(mnemo).toAccountExtendedPublicKey();
    }

    static createNewMnemonic() {
        return mnemonic.generateMnemonic();
    }

    static validateMnemonic(mnemo: string): boolean {
        return mnemonic.validateMnemonic(mnemo);
    }

    private static getPrivateKeyFromMnemonic(mnemo: string): ExtendedPrivateKey {
        const seed = mnemonic.mnemonicToSeedSync(mnemo);
        return ExtendedPrivateKey.fromSeed(seed);
    }

    // ----------------------
    // -- Wallet functions --
    // ----------------------
    getWalletState(): WalletState {
        return {
            addressMap: { ...this.addressMap },
            firstRIndexWithoutTxs: this.firstRIndexWithoutTxs,
            firstCIndexWithoutTxs: this.firstCIndexWithoutTxs,
            lastHashBlock: this.lastHashBlock,
            accountCellsMap: { ...this.accountCellsMap },
            accountTransactionMap: { ...this.accountTransactionMap },
        };
    }

    async synchronize(): Promise<WalletState> {
        if (this.synchronizing) return this.getWalletState();
        this.synchronizing = true;
        if (this.onSyncStart) this.onSyncStart();
        let toBlock: string;
        let fromBlock: string;
        const currentBlock = await this.connection.getCurrentBlockHeader();

        if (!this.lastHashBlock) {
            toBlock = currentBlock.number;
        } else {
            fromBlock = this.lastHashBlock;
            toBlock = currentBlock.number;
        }

        const cellProvider = this.connection.getCellProvider({ toBlock });
        const addressTypes: AddressType[] = [AddressType.Receiving, AddressType.Change];
        const keysArr: string[] = [];
        const addressesArr: string[] = [];
        const lumosTxsArr: TransactionWithStatus[][] = [];

        for (const addressType of addressTypes) {
            let currentIndex = 0;
            let firstIndex = addressType === AddressType.Receiving ? this.firstRIndexWithoutTxs : this.firstCIndexWithoutTxs;

            while (currentIndex <= firstIndex) {
                const address = this.getAddress(currentIndex, addressType);
                const lumosTxs = await this.transactionService.getLumosTransactions(address, toBlock, fromBlock!);

                if (lumosTxs.length > 0) {
                    const lock = this.getLock(currentIndex, addressType);
                    const mapKey = `${addressType}-${currentIndex}`;
                    keysArr.push(mapKey);
                    addressesArr.push(address);
                    lumosTxsArr.push(lumosTxs);

                    // Update cells
                    const newCells: Cell[] = [];
                    const collectorOptions: QueryOptions = { lock, toBlock };
                    const cellCollector = cellProvider.collector(collectorOptions);
                    for await (const cell of cellCollector.collect()) {
                        newCells.push(cell);
                    }
                    this.accountCellsMap[mapKey] = newCells;

                    // Update indexes
                    if (currentIndex === firstIndex) {
                        firstIndex += 1;
                    }
                }
                currentIndex += 1;
            }
            if (addressType === AddressType.Receiving) {
                this.firstRIndexWithoutTxs = firstIndex;
            } else {
                this.firstCIndexWithoutTxs = firstIndex;
            }
        }

        if (this.onSync) this.onSync();
        const allAddresses = this.getAllAddresses();
        for (let i = 0; i < keysArr.length && i < lumosTxsArr.length && i < addressesArr.length; i += 1) {
            const address = addressesArr[i];
            const transactions: Transaction[] = [];

            for (const tx of lumosTxsArr[i]) {
                const finalTx = await this.transactionService.getTransactionFromLumosTx(tx, address, allAddresses);
                transactions.push(finalTx);
            }

            // Update transactions
            const currentTxs: Transaction[] = this.accountTransactionMap[keysArr[i]] || [];
            this.accountTransactionMap[keysArr[i]] = [...currentTxs, ...transactions];
        }

        this.lastHashBlock = currentBlock.number;

        const walletState = this.getWalletState();
        if (this.onSync) {
            await this.onSync(walletState);
        }
        this.synchronizing = false;

        return walletState;
    }

    getCells(): Cell[] {
        return [...Object.values(this.accountCellsMap)].flat(1);
    }

    getNextAddress(): string {
        return this.getAddress(this.firstRIndexWithoutTxs, AddressType.Receiving);
    }

    getAccountIndexes(addressType: AddressType = AddressType.Receiving): number[] {
        if (addressType === AddressType.Receiving) {
            return [...Array(this.firstRIndexWithoutTxs).keys()];
        }
        return [...Array(this.firstCIndexWithoutTxs).keys()];
    }

    getLock(accountId = 0, addressType: AddressType, script: AddressScriptType = AddressScriptType.SECP256K1_BLAKE160): Script {
        const template = this.connection.getConfig().SCRIPTS[script];
        const lockScript = {
            code_hash: template!.CODE_HASH,
            hash_type: template!.HASH_TYPE,
            args: this.accountPublicKey.publicKeyInfo(addressType, accountId).blake160,
        };

        return lockScript;
    }

    getAddress(accountId = 0, addressType: AddressType, script: AddressScriptType = AddressScriptType.SECP256K1_BLAKE160): string {
        const key = `${accountId}-${addressType}-${script}`;
        if (!this.addressMap[key]) {
            const address = this.connection.getAddressFromLock(this.getLock(accountId, addressType, script));
            this.addressMap[key] = address;
        }

        return this.addressMap[key];
    }

    getAllAddresses(): string[] {
        const addresses = [];
        for (let i = 0; i < this.firstRIndexWithoutTxs; i += 1) {
            addresses.push(this.getAddress(i, AddressType.Receiving));
        }
        for (let i = 0; i < this.firstCIndexWithoutTxs; i += 1) {
            addresses.push(this.getAddress(i, AddressType.Change));
        }

        return addresses;
    }

    getAllPrivateKeys(mnemo: string): string[] {
        const extPrivateKey = WalletService.getPrivateKeyFromMnemonic(mnemo);
        const privateKeys = [];
        for (let i = 0; i < this.firstRIndexWithoutTxs; i += 1) {
            privateKeys.push(extPrivateKey.privateKeyInfo(AddressType.Receiving, i).privateKey);
        }
        for (let i = 0; i < this.firstCIndexWithoutTxs; i += 1) {
            privateKeys.push(extPrivateKey.privateKeyInfo(AddressType.Change, i).privateKey);
        }

        return privateKeys;
    }

    getAddressAndPrivateKey(
        mnemo: string,
        accountId = 0,
        script: AddressScriptType = AddressScriptType.SECP256K1_BLAKE160,
    ): { address: string; privateKey: string } {
        const address = this.getAddress(accountId, AddressType.Receiving, script);
        const extPrivateKey = WalletService.getPrivateKeyFromMnemonic(mnemo);
        const privateKey = extPrivateKey.privateKeyInfo(AddressType.Receiving, accountId).privateKey;

        return { address, privateKey };
    }

    getAddressAndPrivKeyFromLock(mnemo: string, lock: Script): { address: string; privateKey: string } {
        const address = this.connection.getAddressFromLock(lock);
        const extPrivateKey = WalletService.getPrivateKeyFromMnemonic(mnemo);
        const addresses = this.getAllAddresses();

        let privateKey: string;
        if (addresses.indexOf(address) < this.firstRIndexWithoutTxs) {
            ({ privateKey } = extPrivateKey.privateKeyInfo(AddressType.Receiving, addresses.indexOf(address)));
        } else {
            ({ privateKey } = extPrivateKey.privateKeyInfo(AddressType.Change, addresses.indexOf(address) - this.firstRIndexWithoutTxs));
        }

        return { address, privateKey };
    }

    async getBalanceFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<Balance> {
        const address = this.getAddress(accountId, addressType);
        const ckb = await this.ckbService.getBalance(address);
        const tokens = await this.tokenService.getBalance(address);
        const nfts = await this.nftService.getBalance(address);
        const dao = await this.daoService.getBalance(address);

        return { ckb, tokens, dao, nfts };
    }

    async getBalance(): Promise<Balance> {
        const cells = this.getCells();
        const ckb = this.ckbService.getBalanceFromCells(cells);
        const tokens = this.tokenService.getBalanceFromCells(cells);
        const nfts = await this.nftService.getBalanceFromCells(cells);
        const dao = await this.daoService.getBalanceFromCells(cells);

        return { ckb, tokens, dao, nfts };
    }

    // -----------------------------------
    // -- Transaction service functions --
    // -----------------------------------
    async getTransactionsFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<Transaction[]> {
        const address = this.getAddress(accountId, addressType);

        return this.transactionService.getTransactions(address, this.getAllAddresses());
    }

    getTransactions(): Transaction[] {
        const sortedTxs = [...Object.values(this.accountTransactionMap)].flat(1).sort((txa, txb) => txa.blockNumber! - txb.blockNumber!);
        // Remove equal transactions
        for (let i = 0; i < sortedTxs.length; i += 1) {
            let j = i + 1;

            while (j < sortedTxs.length) {
                if (sortedTxs[i].transactionHash === sortedTxs[j].transactionHash && sortedTxs[i].type === sortedTxs[j].type) {
                    sortedTxs.splice(j, 1);
                } else {
                    j += 1;
                }
            }
        }

        return sortedTxs;
    }

    async getTransactionFromHash(txHash: string): Promise<Transaction> {
        return this.transactionService.getTransactionFromHash(txHash, [...this.getAllAddresses(), this.getNextAddress()]);
    }

    // ---------------------------
    // -- CKB service functions --
    // ---------------------------
    async sendTransactionSingleAccount(
        amount: bigint,
        mnemo: string,
        to: string,
        accountId: number,
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<string> {
        const { address, privateKey } = this.getAddressAndPrivateKey(mnemo, accountId);
        await this.synchronize();

        return this.ckbService.transfer(address, to, amount, privateKey, feeRate);
    }

    async sendTransaction(amount: bigint, mnemo: string, to: string, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        await this.synchronize();
        const addresses = this.getAllAddresses();
        const privateKeys = this.getAllPrivateKeys(mnemo);

        return this.ckbService.transferFromCells(this.getCells(), addresses, to, amount, privateKeys, feeRate);
    }

    async getCKBBalanceFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<CKBBalance> {
        const address = this.getAddress(accountId, addressType);
        return this.ckbService.getBalance(address);
    }

    getCKBBalance(): CKBBalance {
        return this.ckbService.getBalanceFromCells(this.getCells());
    }

    // -----------------------------
    // -- Token service functions --
    // -----------------------------
    // Deprecated in accounts
    async issueTokens(amount: number, mnemo: string, accountId = 0, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        const { address, privateKey } = this.getAddressAndPrivateKey(mnemo, accountId);

        return this.tokenService.issue(address, amount, privateKey, feeRate);
    }

    async transferTokensSingleAccount(
        amount: number,
        mnemo: string,
        to: string,
        token: string,
        accountId = 0,
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<string> {
        const { address, privateKey } = this.getAddressAndPrivateKey(mnemo, accountId);
        await this.synchronize();

        return this.tokenService.transfer(address, to, token, amount, privateKey, feeRate);
    }

    async transferTokens(amount: bigint, mnemo: string, to: string, token: string, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        await this.synchronize();
        const addresses = this.getAllAddresses();
        const privateKeys = this.getAllPrivateKeys(mnemo);

        return this.tokenService.transferFromCells(this.getCells(), addresses, to, token, amount, privateKeys, feeRate);
    }

    async getTokensBalanceFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<TokenAmount[]> {
        const address = this.getAddress(accountId, addressType);
        return this.tokenService.getBalance(address);
    }

    getTokensBalance(): TokenAmount[] {
        return this.tokenService.getBalanceFromCells(this.getCells());
    }

    // -----------------------------
    // -- Nft service functions --
    // -----------------------------
    async getNftsBalanceFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<Nft[]> {
        const address = this.getAddress(accountId, addressType);
        return this.nftService.getBalance(address);
    }

    async getNftsBalance(): Promise<Nft[]> {
        return this.nftService.getBalanceFromCells(this.getCells());
    }

    async transferNfts(mnemo: string, to: string, nft: Nft, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        await this.synchronize();
        const addresses = this.getAllAddresses();
        const privateKeys = this.getAllPrivateKeys(mnemo);

        return this.nftService.transferFromCells(this.getCells(), addresses, to, nft, privateKeys, feeRate);
    }

    // ---------------------------
    // -- DAO service functions --
    // ---------------------------
    async depositInDAOSingleAccount(amount: bigint, mnemo: string, accountId = 0, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        const { address, privateKey } = this.getAddressAndPrivateKey(mnemo, accountId);
        return this.daoService.deposit(amount, address, address, privateKey, feeRate);
    }

    async depositInDAO(amount: bigint, mnemo: string, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        await this.synchronize();
        const addresses = this.getAllAddresses();
        const privateKeys = this.getAllPrivateKeys(mnemo);

        return this.daoService.depositMultiAccount(amount, this.getCells(), addresses, this.getNextAddress(), privateKeys, feeRate);
    }

    async withdrawOrUnlockFromCell(cell: Cell, mnemo: string, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        const { address, privateKey } = this.getAddressAndPrivKeyFromLock(mnemo, cell.cell_output.lock);
        const feeAddresses = this.getAllAddresses();
        const privateKeys = this.getAllPrivateKeys(mnemo);
        const to = this.getNextAddress();

        if (!this.daoService.isCellDeposit(cell)) {
            this.logger.info("Unlocking withdraw cell");

            // Check real unlockability
            if (!(await this.daoService.isCellUnlockable(cell))) {
                throw new Error("Cell can not yet be unlocked.");
            }
            return this.daoService.unlock(cell, privateKey, address, to, feeAddresses, privateKeys, feeRate);
        }

        this.logger.info("Withdrawing deposit cell");
        return this.daoService.withdraw(cell, privateKey, feeAddresses, privateKeys, feeRate);
    }

    async withdrawOrUnlock(unlockableAmount: DAOUnlockableAmount, mnemo: string): Promise<string> {
        await this.synchronize();
        const cells = await this.daoService.filterDAOCells(this.getCells());

        const cell = await this.daoService.findCellFromUnlockableAmountAndCells(unlockableAmount, cells);
        if (!cell) {
            throw new Error("Cell related to unlockable amount not found!");
        }
        this.logger.info(cell);
        return this.withdrawOrUnlockFromCell(cell, mnemo);
    }

    async getDAOStatisticsFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<DAOStatistics> {
        const address = this.getAddress(accountId, addressType);
        return this.daoService.getStatistics(address);
    }

    async getDAOStatistics(): Promise<DAOStatistics> {
        return this.daoService.getStatisticsFromCells(this.getCells());
    }

    async getDAOBalanceFromAccount(accountId = 0, addressType: AddressType = AddressType.Receiving): Promise<DAOBalance> {
        const address = this.getAddress(accountId, addressType);
        return this.daoService.getBalance(address);
    }

    async getDAOBalance(): Promise<DAOBalance> {
        return this.daoService.getBalanceFromCells(this.getCells());
    }

    async getDAOUnlockableAmountsFromAccount(
        accountId = 0,
        addressType: AddressType = AddressType.Receiving,
    ): Promise<DAOUnlockableAmount[]> {
        const address = this.getAddress(accountId, addressType);
        return this.daoService.getUnlockableAmounts(address);
    }

    async getDAOUnlockableAmounts(): Promise<DAOUnlockableAmount[]> {
        return this.daoService.getUnlockableAmountsFromCells(this.getCells());
    }

    // -----------------------------------
    // -- Partial transaction functions --
    // -----------------------------------
    async getPartialTransactionTypeFromOutput(tx: TransactionSkeletonType): Promise<TransactionType> {
        // TODO: Define how they send us unlock and withdraw DAO transactions
        if (tx.get("outputs").size !== 1) {
            throw new Error("Invalid outputs length");
        }

        const output = tx.get("outputs").get(0)!;
        if (!output.cell_output.type) {
            return TransactionType.SEND_NATIVE_TOKEN;
        }

        const scriptType: ScriptType = {
            codeHash: output.cell_output.type.code_hash,
            hashType: output.cell_output.type.hash_type as HashType,
            args: output.cell_output.type.args,
        };

        if (TransactionService.isScriptTypeScript(scriptType, this.connection.getConfig().SCRIPTS.SUDT!)) {
            return TransactionType.SEND_TOKEN;
        }

        if (TransactionService.isScriptTypeScript(scriptType, this.connection.getConfig().SCRIPTS.DAO!)) {
            if (output.data.length === 18 && Number(utils.readBigUInt64LE(output.data)) === 0) {
                return TransactionType.DEPOSIT_DAO;
            }
            // TODO: Withdraw, like unlock should be defined by input not output
            // return TransactionType.WITHDRAW_DAO;
        }

        if (await this.nftService.isScriptNftScript(scriptType)) {
            return TransactionType.SEND_NFT;
        }

        throw new Error("Type not supported");
    }

    async fillAndSignPartialTransaction(
        tx: TransactionSkeletonType,
        cells: Cell[],
        mnemonic: string,
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<LumosTx> {
        const addresses = this.getAllAddresses();
        const type = await this.getPartialTransactionTypeFromOutput(tx);
        const output = tx.get("outputs").get(0);
        const input = tx.get("inputs").get(0);
        const privateKeys = this.getAllPrivateKeys(mnemonic);
        let txSkeleton = tx;

        if (type === TransactionType.SEND_NATIVE_TOKEN || type === TransactionType.DEPOSIT_DAO) {
            const capacity = BigInt(output!.cell_output.capacity);
            txSkeleton = this.transactionService.injectCapacity(txSkeleton, capacity, cells);
        } else if (type === TransactionType.SEND_TOKEN) {
            const capacity = BigInt(output!.cell_output.capacity);
            const token = output!.cell_output.type!.args;
            const amount = utils.readBigUInt128LE(output!.data);
            txSkeleton = this.transactionService.injectTokenCapacity(txSkeleton, token, amount, capacity, cells);
        } else if (type === TransactionType.SEND_NFT) {
            const nftScript: ScriptType = {
                args: output!.cell_output.type!.args,
                codeHash: output!.cell_output.type!.code_hash,
                hashType: output!.cell_output.type!.hash_type,
            };
            txSkeleton = this.transactionService.injectNftCapacity(txSkeleton, nftScript, output!.data, cells);
        } else if (type === TransactionType.WITHDRAW_DAO) {
            txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getEmptyCellProvider() });
            txSkeleton = await dao.withdraw(txSkeleton, input!, undefined, this.connection.getConfigAsObject());
        } else if (type === TransactionType.UNLOCK_DAO) {
            const { address, privateKey } = this.getAddressAndPrivKeyFromLock(mnemonic, input!.cell_output.lock);
            const to = this.getNextAddress();

            txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getEmptyCellProvider() });
            const depositCell = await this.daoService.getDepositCellFromWithdrawCell(input!);

            txSkeleton = await dao.unlock(txSkeleton, depositCell, input!, to, address, this.connection.getConfigAsObject());
            txSkeleton = await common.payFeeByFeeRate(txSkeleton, addresses, feeRate, undefined, this.connection.getConfigAsObject());

            const signingPrivKeys = this.transactionService.extractPrivateKeys(txSkeleton, addresses, privateKeys);
            const sortedSignPKeys = [privateKey, ...signingPrivKeys.filter((pkey) => pkey !== privateKey)];
            return this.transactionService.signTransaction(txSkeleton, sortedSignPKeys);
        }

        txSkeleton = await common.payFeeByFeeRate(txSkeleton, addresses, feeRate, undefined, this.connection.getConfigAsObject());
        const signingPrivKeys = this.transactionService.extractPrivateKeys(txSkeleton, addresses, privateKeys);
        return this.transactionService.signTransaction(txSkeleton, signingPrivKeys);
    }
}
