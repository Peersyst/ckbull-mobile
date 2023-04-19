import { TransactionSkeletonType } from "@ckb-lumos/helpers";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { useQuery } from "react-query";

export default function useGetTransactionType(transaction: TransactionSkeletonType) {
    const { serviceInstance, index: usedIndex, queryEnabled, network } = useServiceInstance();

    return useQuery(
        [Queries.SIGNER_APP_GET_TRANSACTION_TYPE, network, usedIndex],
        () => serviceInstance!.getTransactionSkeletonType({ transaction }),
        {
            enabled: queryEnabled,
        },
    );
}
