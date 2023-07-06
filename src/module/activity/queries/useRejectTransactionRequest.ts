import { UseMutationOptions, UseMutationResult, useMutation, useQueryClient } from "react-query";
import { DeclineTransactionRequest, SimpleTransactionRequestDto, TransactionRequestService } from "module/api/service";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";

export interface TransactionRequestReject {
    transactionRequestToken: string;
    requestBody: DeclineTransactionRequest;
}

export default function useRejectTransactionRequest({
    onSuccess,
    ...options
}: UseMutationOptions<SimpleTransactionRequestDto, unknown, TransactionRequestReject, unknown>): UseMutationResult<
    SimpleTransactionRequestDto,
    unknown,
    TransactionRequestReject,
    unknown
> {
    const { index: usedIndex, network } = useServiceInstance();
    const queryClient = useQueryClient();

    return useMutation(
        ({ transactionRequestToken, requestBody }: TransactionRequestReject) =>
            TransactionRequestService.declineTransactionRequest(transactionRequestToken, requestBody),
        {
            onSuccess: (...args) => {
                queryClient.invalidateQueries([Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network]);
                onSuccess?.(...args);
            },
            ...options,
        },
    );
}
