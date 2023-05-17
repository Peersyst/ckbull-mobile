import { Nft, TransactionType } from "ckb-peersyst-sdk";
import useGetAmountFromTransaction from "module/activity/hook/useGetAmountFromTransaction";
import { TokenAmount } from "../../token/types";

export interface TransactionAsset {
    amount: string | undefined;
    token: TokenAmount | undefined;
    nft: Nft | undefined;
}

export function useGetTransactionAsset(transaction: object) {
    const obtainAmount = useGetAmountFromTransaction();

    const getAssetByType = (type: TransactionType | undefined, nft?: Nft | null | undefined): TransactionAsset => {
        const baseAsset: TransactionAsset = {
            amount: "0",
            token: undefined,
            nft: undefined,
        };
        if (type === TransactionType.SEND_NATIVE_TOKEN) return { ...baseAsset, amount: obtainAmount(transaction) };
        else if (type === TransactionType.SEND_NFT) return { ...baseAsset, nft: nft || undefined };
        else return { ...baseAsset, amount: obtainAmount(transaction) };

        // TODO: Add DAO types
    };

    return getAssetByType;
}
