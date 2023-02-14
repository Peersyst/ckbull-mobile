import { Cell } from "@ckb-lumos/lumos";
import { TransactionSkeleton } from "@ckb-lumos/helpers";
import { common } from "@ckb-lumos/common-scripts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as NrcSdk from "@rather-labs/nrc-721-sdk";
import { Logger } from "../../utils/logger";
import { ConnectionService, Environments } from "../connection.service";
import { FeeRate, ScriptType, TransactionService } from "../transaction.service";
import { NftScript, NftSdk } from "./nft.types";

export interface Nft {
    tokenId: string;
    tokenUri: string;
    nftName: string;
    nftSymbol?: string;
    data?: any;
    nftExtraData?: string;
    issued?: number;
    total?: number;
    script: NftScript;
    rawData: string;
}

export interface MNft {
    name: string;
    description: string;
    renderer: string;
    version: number;
    configure: number;
    issued: number;
    total: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class NftService {
    private readonly connection: ConnectionService;
    private transactionService?: TransactionService;
    private readonly logger = new Logger(NftService.name);
    private readonly mNftCodeHash = "0x2b24f0d644ccbdd77bbf86b27c8cca02efa0ad051e447c212636d9ee7acaaec9";
    private readonly mNftTxHash = "0x5dce8acab1750d4790059f22284870216db086cb32ba118ee5e08b97dc21d471";
    private readonly mNftOutpointIndex = "0x2";
    private readonly mNftDepType = "code";
    private readonly mNftClassCodeHash = "0xd51e6eaf48124c601f41abe173f1da550b4cbca9c6a166781906a287abbb3d9a";
    private readonly nrc721TxHash = "0xb85f64679b43e6742ff2b874621d1d75c9680961c94de8187364474d637eddab";
    private readonly nrc721OutpointIndex = "0x0";
    private readonly nrc721DepType = "code";
    private nftSdk: NftSdk = null!;
    private initializing = false;
    private readonly nftCellSize = BigInt(142 * 10 ** 8);

    constructor(connectionService: ConnectionService) {
        this.connection = connectionService;
    }

    private static mNftFormat(dataHex: string): MNft {
        const data = dataHex.slice(2);
        const version = parseInt(data.slice(0, 1), 16);
        const total = parseInt(data.slice(1, 10), 16);
        const issued = parseInt(data.slice(10, 18), 16);
        const configure = parseInt(data.slice(18, 20), 16);
        const nameSize = parseInt(data.slice(20, 24), 16);
        const nameEnd = 24 + nameSize * 2;
        const name = decodeURIComponent(data.slice(24, nameEnd).replace(/[0-9a-f]{2}/g, "%$&"));
        const descriptionSizeEnd = nameEnd + 4;
        const descriptionSize = parseInt(data.slice(nameEnd, descriptionSizeEnd), 16);
        const descriptionEnd = descriptionSizeEnd + descriptionSize * 2;
        const description = decodeURIComponent(data.slice(descriptionSizeEnd, descriptionEnd).replace(/[0-9a-f]{2}/g, "%$&"));
        const rendererSizeEnd = descriptionEnd + 4;
        const rendererSize = parseInt(data.slice(descriptionEnd, rendererSizeEnd), 16);
        const rendererEnd = rendererSizeEnd + rendererSize * 2;
        const renderer = decodeURIComponent(data.slice(rendererSizeEnd, rendererEnd).replace(/[0-9a-f]{2}/g, "%$&"));

        return {
            name: name,
            description: description,
            renderer: renderer,
            version: version,
            configure: configure,
            issued: issued,
            total: total,
        };
    }

    setTransactionService(transactionService: TransactionService) {
        this.transactionService = transactionService;
    }

    async initialize() {
        if (!this.nftSdk && !this.initializing) {
            this.initializing = true;
            this.nftSdk = await NrcSdk.initialize({
                nodeUrl: this.connection.getCKBUrl(),
                indexerUrl: this.connection.getIndexerUrl(),
            });
            this.logger.info("NftService initialized");
        } else if (!this.nftSdk) {
            while (!this.nftSdk) {
                await sleep(100);
            }
        }
    }

    async isScriptNftScript(scriptType: ScriptType): Promise<boolean> {
        await this.initialize();

        let isNftCell: boolean;
        try {
            isNftCell = await this.nftSdk!.nftCell.isCellNRC721(scriptType);
        } catch (error) {
            isNftCell = false;
        }

        return isNftCell;
    }

    private cellToNftScript(cell: Cell): NftScript | null {
        if (!cell.cell_output.type) {
            return null;
        }

        return {
            codeHash: cell.cell_output.type.code_hash,
            args: cell.cell_output.type.args,
            hashType: cell.cell_output.type.hash_type,
        };
    }

    private async getNftFromCell(cell: Cell): Promise<Nft | null> {
        const cellTypeScript = this.cellToNftScript(cell);
        if (!cellTypeScript) {
            return null;
        }

        let isNftCell: boolean;
        try {
            isNftCell = await this.nftSdk!.nftCell.isCellNRC721(cellTypeScript!);
        } catch (error) {
            isNftCell = false;
        }

        if (isNftCell) {
            const nft = await this.nftSdk!.nftCell.read(cellTypeScript);

            return {
                tokenId: nft.tokenId,
                tokenUri: nft.tokenUri,
                data: JSON.parse(nft.data),
                nftName: nft.factoryData.name,
                nftSymbol: nft.factoryData.symbol,
                nftExtraData: nft.factoryData.extraData,
                script: cellTypeScript,
                rawData: cell.data,
            };
        }
        if (cellTypeScript.codeHash === this.mNftCodeHash && this.connection.getEnvironment() === Environments.Mainnet) {
            const cellProvider = this.connection.getCellProvider({
                type: {
                    code_hash: this.mNftClassCodeHash,
                    args: cellTypeScript.args.slice(0, -8),
                    hash_type: "type",
                },
            });

            const cells: Cell[] = [];
            const cellCollector = cellProvider.collector({});
            for await (const cell of cellCollector.collect()) {
                cells.push(cell);
            }

            if (cells.length === 1) {
                const mNft = NftService.mNftFormat(cells[0].data);

                return {
                    nftName: mNft.name,
                    tokenId: parseInt(cellTypeScript.args.slice(-8), 16).toString(),
                    tokenUri: mNft.renderer,
                    issued: mNft.issued,
                    total: mNft.total,
                    data: {
                        description: mNft.description,
                        version: mNft.version,
                        configure: mNft.configure,
                        type: "m-NFT",
                    },
                    script: cellTypeScript,
                    rawData: cell.data,
                };
            }
        }

        return null;
    }

    async transferFromCells(
        cells: Cell[],
        fromAddresses: string[],
        to: string,
        nft: Nft,
        privateKeys: string[],
        feeRate: FeeRate = FeeRate.NORMAL,
    ): Promise<string> {
        if (!this.transactionService) {
            throw new Error("No transaction service");
        }
        let txSkeleton = TransactionSkeleton({ cellProvider: this.connection.getCellProvider() });

        // Add output
        const toScript = this.connection.getLockFromAddress(to);
        txSkeleton = txSkeleton.update("outputs", (outputs) => {
            return outputs.push({
                cell_output: {
                    capacity: "0x" + this.nftCellSize.toString(16),
                    lock: toScript,
                    type: {
                        code_hash: nft.script.codeHash,
                        hash_type: nft.script.hashType,
                        args: nft.script.args,
                    },
                },
                data: nft.rawData,
            });
        });
        txSkeleton = txSkeleton.update("fixedEntries", (fixedEntries) => {
            return fixedEntries.push({
                field: "outputs",
                index: txSkeleton.get("outputs").size - 1,
            });
        });

        // Inject token capacity
        txSkeleton = this.transactionService.addSecp256CellDep(txSkeleton);
        if (nft.script.codeHash === this.mNftCodeHash) {
            // Add mnft code deps
            txSkeleton = txSkeleton.update("cellDeps", (cellDeps) => {
                return cellDeps.push({
                    out_point: {
                        tx_hash: this.mNftTxHash,
                        index: this.mNftOutpointIndex,
                    },
                    dep_type: this.mNftDepType,
                });
            });
        } else {
            // Add nrc-721 code deps
            txSkeleton = txSkeleton.update("cellDeps", (cellDeps) => {
                return cellDeps.push({
                    out_point: {
                        tx_hash: this.nrc721TxHash,
                        index: this.nrc721OutpointIndex,
                    },
                    dep_type: this.nrc721DepType,
                });
            });
        }
        // txSkeleton = this.transactionService.addSudtCellDep(txSkeleton);
        txSkeleton = this.transactionService.injectNftCapacity(txSkeleton, nft, cells);

        // Pay fee
        txSkeleton = await common.payFeeByFeeRate(txSkeleton, fromAddresses, feeRate, undefined, this.connection.getConfigAsObject());

        // Get signing private keys
        const signingPrivKeys = this.transactionService.extractPrivateKeys(txSkeleton, fromAddresses, privateKeys);

        return this.transactionService.signTransaction(txSkeleton, signingPrivKeys);
    }

    async getBalance(address: string): Promise<Nft[]> {
        await this.initialize();

        const collector = this.connection.getIndexer().collector({
            lock: this.connection.getLockFromAddress(address),
        });

        const nfts: Nft[] = [];
        for await (const cell of collector.collect()) {
            const nft = await this.getNftFromCell(cell);
            if (nft) {
                nfts.push(nft);
            }
        }

        return nfts;
    }

    async getBalanceFromCells(cells: Cell[]): Promise<Nft[]> {
        await this.initialize();

        const nfts: Nft[] = [];
        for await (const cell of cells) {
            const nft = await this.getNftFromCell(cell);
            if (nft) {
                nfts.push(nft);
            }
        }

        return nfts;
    }
}
