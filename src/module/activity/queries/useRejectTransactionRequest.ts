import { useMutation } from "react-query";

import { TransactionRequestService } from "module/api/service";
import { SignTransactionRequest } from "../../api/service/models/SignTransactionRequest";

export interface TransactionRequestReject {
    transactionRequestToken: string;
    requestBody: SignTransactionRequest;
}

export default function useRejectTransactionRequest() {
    return useMutation(({ transactionRequestToken, requestBody }: TransactionRequestReject) =>
        TransactionRequestService.declineTransactionRequest(transactionRequestToken, requestBody),
    );
}
