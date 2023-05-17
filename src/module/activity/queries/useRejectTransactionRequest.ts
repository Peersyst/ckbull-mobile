import { useMutation, useQueryClient } from "react-query";
import { DeclineTransactionRequest, TransactionRequestService } from "module/api/service";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { useToast } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";

export interface TransactionRequestReject {
    transactionRequestToken: string;
    requestBody: DeclineTransactionRequest;
}

export default function useRejectTransactionRequest() {
    const { index: usedIndex, network } = useServiceInstance();
    const translate = useTranslate();
    const { showToast } = useToast();
    const queryClient = useQueryClient();

    return useMutation(
        ({ transactionRequestToken, requestBody }: TransactionRequestReject) =>
            TransactionRequestService.declineTransactionRequest(transactionRequestToken, requestBody),
        {
            onSuccess: () => {
                queryClient.invalidateQueries([Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network]);
                showToast(translate("rejectTransactionRequestSuccess"), { type: "success" });
            },
        },
    );
}
