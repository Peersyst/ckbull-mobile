import { Cell, Script, utils, HashType } from "@ckb-lumos/lumos";
import { TransactionSkeleton } from "@ckb-lumos/helpers";
import { sudt, common } from "@ckb-lumos/common-scripts";
import { ConnectionService } from "../connection.service";
import { FeeRate, TransactionService } from "../transaction.service";

export interface TokenType {
    args: string;
    codeHash: string;
    hashType: HashType;
}
export interface TokenAmount {
    type: TokenType;
    amount: number;
}

export class TokenService {
    private readonly connection: ConnectionService;
    private readonly transactionService: TransactionService;
    private readonly sudtCellSize = BigInt(142 * 10 ** 8);

    constructor(connectionService: ConnectionService, transactionService: TransactionService) {
        this.connection = connectionService;
        this.transactionService = transactionService;
    }

    private isTokenScriptType(script: Script): boolean {
        if (!script) {
            return false;
        }

        const sudtScript = this.connection.getConfig().SCRIPTS.SUDT;
        return script.code_hash === sudtScript!.CODE_HASH && script.hash_type === sudtScript!.HASH_TYPE;
    }

    private getScriptTypeFromToken(hash: string): Script {
        const sudtScript = this.connection.getConfig().SCRIPTS.SUDT;

        return {
            code_hash: sudtScript!.CODE_HASH,
            hash_type: sudtScript!.HASH_TYPE,
            args: hash,
        };
    }

    async issue(address: string, amount: number, privateKey: string, feeRate: FeeRate = FeeRate.NORMAL): Promise<string> {
        let txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getEmptyCellProvider() });
        txSkeleton = await sudt.issueToken(txSkeleton, address, amount, undefined, undefined, this.connection.getConfigAsObject());
        txSkeleton = await common.payFeeByFeeRate(txSkeleton, [address], feeRate, undefined, this.connection.getConfigAsObject());

        return this.transactionService.signAndSendTransaction(txSkeleton, [privateKey]);
    }

    async transfer(
        from: string,
        to: string,
        token: string,
        amount: number,
        privateKey: string,
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<string> {
        let txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getCellProvider() });
        txSkeleton = await sudt.transfer(txSkeleton, [from], token, to, amount, undefined, undefined, undefined, {
            config: this.connection.getConfig(),
        });
        txSkeleton = await common.payFeeByFeeRate(txSkeleton, [from], feeRate, undefined, this.connection.getConfigAsObject());

        return this.transactionService.signAndSendTransaction(txSkeleton, [privateKey]);
    }

    async transferFromCells(
        cells: Cell[],
        fromAddresses: string[],
        to: string,
        token: string,
        amount: bigint,
        privateKeys: string[],
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<string> {
        let txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getCellProvider() });

        // Add output
        const toScript = this.connection.getLockFromAddress(to);
        txSkeleton = txSkeleton.update("outputs", (outputs) => {
            return outputs.push({
                cell_output: {
                    capacity: "0x" + this.sudtCellSize.toString(16),
                    lock: toScript,
                    type: this.getScriptTypeFromToken(token),
                },
                data: utils.toBigUInt128LE(amount.toString()),
            });
        });

        txSkeleton = txSkeleton.update("fixedEntries", (fixedEntries) => {
            return fixedEntries.push({
                field: "outputs",
                index: txSkeleton.get("outputs").size - 1,
            });
        });

        // Inject token capacity
        txSkeleton = this.transactionService.addSudtCellDep(txSkeleton);
        txSkeleton = this.transactionService.addSecp256CellDep(txSkeleton);
        txSkeleton = this.transactionService.injectTokenCapacity(txSkeleton, token, amount, this.sudtCellSize, cells);

        // Pay fee
        txSkeleton = await common.payFeeByFeeRate(txSkeleton, fromAddresses, feeRate, undefined, this.connection.getConfigAsObject());

        // Get signing private keys
        const signingPrivKeys = this.transactionService.extractPrivateKeys(txSkeleton, fromAddresses, privateKeys);

        return this.transactionService.signAndSendTransaction(txSkeleton, signingPrivKeys);
    }

    async getBalance(address: string): Promise<TokenAmount[]> {
        const collector = this.connection.getIndexer().collector({
            lock: this.connection.getLockFromAddress(address),
        });

        const cells: Cell[] = [];
        for await (const cell of collector.collect()) {
            cells.push(cell);
        }

        return this.getBalanceFromCells(cells);
    }

    getBalanceFromCells(cells: Cell[]): TokenAmount[] {
        const tokenMap = new Map<string, number>();
        for (const cell of cells) {
            if (this.isTokenScriptType(cell.cell_output.type!)) {
                const key = cell.cell_output.type!.args;

                if (!tokenMap.has(key)) {
                    tokenMap.set(key, Number(utils.readBigUInt128LE(cell.data)));
                } else {
                    tokenMap.set(key, Number(utils.readBigUInt128LE(cell.data)) + tokenMap.get(key)!);
                }
            }
        }

        const tokens: TokenAmount[] = [];
        const { CODE_HASH: codeHash, HASH_TYPE: hashType } = this.connection.getConfig().SCRIPTS.SUDT!;
        tokenMap.forEach((value, key) =>
            tokens.push({
                type: { args: key, codeHash, hashType },
                amount: value,
            }),
        );

        return tokens;
    }
}
