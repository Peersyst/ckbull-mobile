import { Nft, TransactionType } from "ckb-peersyst-sdk";
import useGetAmountFromTransaction from "module/activity/hook/useGetAmountFromTransaction";
import useGetTransactionType from "module/activity/queries/useGetTransactionType";
import { jsonToTransactionSkeletonInterface } from "module/sdk/utils/parser";
import { TokenAmount } from "../../token/types";
import useGetNftFromPartialTransaction from "../queries/useGetNftFromPartialTransaction";
import { useEffect, useState } from "react";

export interface TransactionAsset {
    amount: string | undefined;
    token: TokenAmount | undefined;
    nft: Nft | undefined;
}

export interface UseGetTransactionAssetReturn {
    asset: TransactionAsset;
    isLoading: boolean;
}

export function useGetTransactionAsset(transaction: any): UseGetTransactionAssetReturn {
    const partialTransaction = jsonToTransactionSkeletonInterface(transaction);

    const baseAsset: TransactionAsset = {
        amount: undefined,
        token: undefined,
        nft: undefined,
    };

    const obtainAmount = useGetAmountFromTransaction();
    const { data: nft, isLoading: isLoadingNft } = useGetNftFromPartialTransaction(partialTransaction);
    const { data: type, isLoading: isLoadingType } = useGetTransactionType(partialTransaction);

    const [asset, setAsset] = useState<TransactionAsset>(baseAsset);

    const assetByType = (type: TransactionType | undefined) => {
        const baseAsset: TransactionAsset = {
            amount: "0",
            token: undefined,
            nft: undefined,
        };
        if (type === TransactionType.SEND_NATIVE_TOKEN) setAsset({ ...baseAsset, amount: obtainAmount(transaction) });
        else if (type === TransactionType.SEND_NFT) setAsset({ ...baseAsset, nft: nft || undefined });
        else if (type === TransactionType.SEND_TOKEN) {
            setAsset({
                ...baseAsset,
                token: {
                    amount: 0,
                    type: {
                        apiId: "usd-coin",
                        decimals: 0,
                        imageUri: "",
                        description: "",
                        tokenName: "",
                        name: "",
                        codeHash: "",
                        args: "",
                        hashType: "data",
                    },
                },
            });
        }
    };

    useEffect(() => assetByType(type), [type, nft]);

    // TODO: Add DAO types

    return {
        asset,
        isLoading: isLoadingType || isLoadingNft,
    };
}
