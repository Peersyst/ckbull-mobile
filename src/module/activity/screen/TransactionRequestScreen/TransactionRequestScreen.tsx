import { Col, useModal } from "@peersyst/react-native-components";
import SignRequestAppSummary from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";
import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import TransactionRequestModal from "module/activity/component/navigation/TransactionRequestModal/TransactionRequestModal";
import useRejectTransactionRequest from "module/activity/queries/useRejectTransactionRequest";
import { CompleteTransactionRequestDto } from "module/api/service";
import { useTranslate } from "module/common/hook/useTranslate";
import SignTransactionRequestSuccess from "../../component/display/SignTransactionRequestSuccess/SignTransactionRequestSuccess";
import SignerTransactionSummary from "module/activity/component/display/SignerTransactionSummary/SignerTransactionSummary";
import SignModal from "module/common/component/feedback/SignModal/SignModal";
import useSendSignedTransactionRequest from "module/activity/queries/useSendSignedTransactionRequest";
import useSignTransaction from "module/activity/queries/useSignTransaction";
import { jsonToTransactionSkeletonInterface } from "../../../sdk/utils/parser";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

export interface TransactionRequestScreenProps {
    transactionRequest: CompleteTransactionRequestDto;
}

export default function TransactionRequestScreen({ transactionRequest }: TransactionRequestScreenProps): JSX.Element {
    const {
        transactionToken,
        signInRequest: { signInToken, app },
        transaction: { transaction: transactionBody, ...restTransaction },
    } = transactionRequest;

    const translate = useTranslate();
    const { hideModal } = useModal();

    const closeTransactionRequestModal = () => hideModal(TransactionRequestModal.id);

    const { mutate: sign, data: hash, isLoading: isSigning, isError: isSignError } = useSignTransaction();
    const {
        mutate: sendSignedTransaction,
        isLoading: isSending,
        isSuccess: isSendSuccess,
        isError: isSendError,
    } = useSendSignedTransactionRequest();
    const { mutate: rejectTransaction, isLoading: isRejecting } = useRejectTransactionRequest();

    const handleReject = () => {
        rejectTransaction({ transactionRequestToken: transactionToken, requestBody: { signInToken } });
        closeTransactionRequestModal();
    };

    const handleSign = async () => {
        const txSkeleton = jsonToTransactionSkeletonInterface(transactionBody);
        sign(txSkeleton, {
            onSuccess: () =>
                sendSignedTransaction({
                    transactionRequestToken: transactionToken,
                    transactionBody: {
                        signInToken,
                        transaction: { ...restTransaction, transaction: transactionBody, transactionHash: hash },
                    },
                }),
            onError: handleReject,
        });
    };

    const extractOutputFromHexValue = (hexValue: string) => convertShannonsToCKB(parseInt(hexValue, 16));

    const getAmountFromTransaction = (transaction: any) => {
        const outputs = transaction["outputs"] as any[];
        return outputs.reduce((acc, output) => acc + extractOutputFromHexValue(output["cell_output"]["capacity"]), 0);
    };

    // TODO: Pending to ask Joan about how to get the senders and receivers from the transaction
    const getReceiversFromTransaction = (transaction: any) => {
        const outputs = transaction["outputs"] as any[];
        return outputs.map((output) => output["cell_output"]["lock"]["args"]);
    };

    // TODI: Pending to ask Joan about how to get the senders and receivers from the transaction
    const getSendersFromTransaction = (transaction: any) => {
        const inputs = transaction["inputs"] as any[];
        return inputs.map((input) => input["previous_output"]["tx_hash"]);
    };

    return (
        <SignModal
            onSign={handleSign}
            isLoading={isSigning || isSending}
            isSuccess={isSendSuccess}
            isError={isSignError || isSendError}
            successMessage={translate("signedSuccess")}
            successDetails={<SignTransactionRequestSuccess transactionHash={hash || ""} />}
            onExited={closeTransactionRequestModal}
        >
            {({ showModal, isSuccess }) => (
                <SignRequestModalLayout
                    rejectTitle={translate("rejectTransaction")}
                    rejectMessage={translate("rejectTransactionDescription")}
                    onReject={handleReject}
                    onSign={showModal}
                    signing={isSigning}
                    rejecting={isRejecting}
                    disabled={isSuccess}
                >
                    <Col gap={20} justifyContent="center">
                        <SignRequestAppSummary requestTitle={translate("confirmTransaction")} app={app} />
                        <SignerTransactionSummary
                            // TODO: Pending to ask Joan about how to get the senders and receivers from the transaction
                            senders={[]}
                            receivers={[]}
                            amount={getAmountFromTransaction(transactionBody)}
                            showTotal
                        />
                    </Col>
                </SignRequestModalLayout>
            )}
        </SignModal>
    );
}
