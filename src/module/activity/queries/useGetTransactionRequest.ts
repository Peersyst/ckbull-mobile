import { TransactionRequestService } from "module/api/service";
import Queries from "query/queries";
import { useQuery } from "react-query";

export default function useGetTransactionRequest(transactionRequestToken: string) {
    return useQuery(Queries.GET_TRANSACTION_REQUEST, () =>
        TransactionRequestService.getTransactionRequestByTransactionToken(transactionRequestToken),
    );
}
