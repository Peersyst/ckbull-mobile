import { SignTransactionRequest, TransactionRequestService } from "module/api/service";
import { useMutation } from "react-query";

export interface TransactionRequestSign {
    transactionRequestToken: string;
    transactionBody: SignTransactionRequest;
}

export default function useSignTransactionRequest() {
    return useMutation(({ transactionRequestToken, transactionBody }: TransactionRequestSign) =>
        TransactionRequestService.signTransactionRequest(transactionRequestToken, transactionBody),
    );
}
