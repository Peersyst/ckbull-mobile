import { SignTransactionRequest, TransactionRequestService } from "module/api/service";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { useMutation, useQueryClient } from "react-query";

export interface TransactionRequestSign {
    transactionRequestToken: string;
    transactionBody: SignTransactionRequest;
}

export default function useSignTransactionRequest() {
    const queryClient = useQueryClient();
    const { index: usedIndex, network } = useServiceInstance();
    return useMutation(
        ({ transactionRequestToken, transactionBody }: TransactionRequestSign) =>
            TransactionRequestService.signTransactionRequest(transactionRequestToken, transactionBody),
        {
            onSuccess: () => {
                queryClient.invalidateQueries([Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network]);
            },
        },
    );
}
