import { Cell, CellDep, Hash, HexString, PackedSince } from "@ckb-lumos/base";
import { List, Map } from "immutable";
import { TransactionSkeletonType, TransactionSkeleton } from "@ckb-lumos/helpers";

export const jsonToTransactionSkeletonInterface = (json: any): TransactionSkeletonType => {
    return TransactionSkeleton({
        cellProvider: null,
        outputs: List<Cell>(json["outputs"]),
        cellDeps: List<CellDep>(json["cellDeps"]),
        headerDeps: List<Hash>(json["headerDeps"]),
        inputs: List<Cell>(json["inputs"]),
        witnesses: List<HexString>(json["witnesses"]),
        fixedEntries: List<{ field: string; index: number }>(json["fixedEntries"]),
        signingEntries: List<{ type: string; index: number; message: string }>(json["signingEntries"]),
        inputSinces: Map<number, PackedSince>(json["inputSinces"]),
    });
};
