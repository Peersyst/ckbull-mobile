import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { TransactionSkeletonType } from "@ckb-lumos/helpers";

export default function useGetNftFromPartialTransaction(transaction: TransactionSkeletonType) {
    const { serviceInstance, index: usedIndex, queryEnabled, network } = useServiceInstance();

    return useQuery(
        [Queries.SIGNER_APP_GET_NFT_FROM_TRANSACTION, network, usedIndex],
        () => serviceInstance!.getNftFromPartialTransaction({ transaction }),
        {
            enabled: queryEnabled,
        },
    );
}
