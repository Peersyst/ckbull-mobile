import { useMutation } from "react-query";

import { DeclineTransactionRequest, TransactionRequestService } from "module/api/service";

export interface TransactionRequestReject {
    transactionRequestToken: string;
    requestBody: DeclineTransactionRequest;
}

export default function useRejectTransactionRequest() {
    return useMutation(({ transactionRequestToken, requestBody }: TransactionRequestReject) =>
        TransactionRequestService.declineTransactionRequest(transactionRequestToken, requestBody),
    );
}
