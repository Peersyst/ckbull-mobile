import { QueryResult } from "query-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import useParsePendingTransactions from "../hook/useParsePendingTransactions";
import { ParsedPendingTransactions, TransactionRequestStatus } from "../types";
import { TransactionRequestService } from "module/api/service";

export default function (): QueryResult<ParsedPendingTransactions[]> {
    const parsePendingTransactions = useParsePendingTransactions();

    const { serviceInstance, index: usedIndex, network, queryEnabled } = useServiceInstance();

    return useQuery(
        [Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network],
        () => TransactionRequestService.getTransactionRequests(TransactionRequestStatus.PENDING, network, serviceInstance?.getAddress()),
        {
            refetchInterval: 10000,
            select: (data) => parsePendingTransactions(data),
            enabled: queryEnabled,
        },
    );
}
