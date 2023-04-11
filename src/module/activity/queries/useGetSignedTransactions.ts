import { QueryResult, useQuery } from "query-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { TransactionRequestService } from "module/api/service";
import { CompleteTransactionRequestDto } from "../../api/service/models/CompleteTransactionRequestDto";

export enum TransactionRequestStatus {
    PENDING = "pending",
    SIGNED = "signed",
    EXPIRED = "expired",
    DECLINED = "declined",
}

export default function (): QueryResult<CompleteTransactionRequestDto[]> {
    const { index: usedIndex, network, queryEnabled, serviceInstance } = useServiceInstance();

    return useQuery(
        [Queries.SIGNER_APP_GET_SIGNED_TRANSACTIONS, usedIndex, network],
        () => TransactionRequestService.getTransactionRequests(TransactionRequestStatus.SIGNED, network, serviceInstance?.getAddress()),
        {
            refetchInterval: 2000,
            enabled: queryEnabled,
        },
    );
}
