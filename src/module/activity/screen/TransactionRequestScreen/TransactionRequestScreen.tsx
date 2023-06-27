import { Col, useModal, useToast } from "@peersyst/react-native-components";
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
    const translateError = useTranslate("error");
    const { hideModal } = useModal();
    const { showToast } = useToast();

    const closeTransactionRequestModal = () => hideModal(TransactionRequestModal.id);

    const handleRejectSuccess = () => {
        closeTransactionRequestModal();
        showToast(translate("rejectTransactionRequestSuccess"), { type: "success" });
    };

    const {
        mutate: sendSignedTransaction,
        isLoading: isSending,
        isSuccess: isSendSuccess,
        isError: isSendError,
    } = useSendSignedTransactionRequest();
    const { mutate: rejectTransaction, isLoading: isRejecting } = useRejectTransactionRequest({});

    const handleReject = () => {
        rejectTransaction({ transactionRequestToken: transactionToken, requestBody: { signInToken } }, { onSuccess: handleRejectSuccess });
    };

    const onSignSuccess = (transactionHash: string | undefined) => {
        sendSignedTransaction({
            transactionRequestToken: transactionToken,
            transactionBody: {
                signInToken,
                transaction: { ...restTransaction, transaction: transactionBody, transactionHash },
            },
        });
    };

    const handleSignError = () => {
        showToast(translateError("invalid_transaction"), { type: "error" });
        rejectTransaction({ transactionRequestToken: transactionToken, requestBody: { signInToken } });
        closeTransactionRequestModal();
    };

    const {
        mutate: sign,
        data: hash,
        isLoading: isSigning,
        isError: isSignError,
    } = useSignTransaction({ onSuccess: onSignSuccess, onError: handleSignError });

    const handleSign = async () => {
        const txSkeleton = jsonToTransactionSkeletonInterface(transactionBody);
        sign(txSkeleton);
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
                        <SignRequestAppSummary requestTitle={translate("confirmTransaction")} app={app} style={{ marginHorizontal: 20 }} />
                        <SignerTransactionSummary transaction={transactionBody} showTotal />
                    </Col>
                </SignRequestModalLayout>
            )}
        </SignModal>
    );
}
