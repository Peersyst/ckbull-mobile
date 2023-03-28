import { Col, useModal } from "@peersyst/react-native-components";
import SignRequestAppSummary from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";
import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import TransactionRequestModal from "module/activity/component/navigation/TransactionRequestModal/TransactionRequestModal";
import useRejectTransactionRequest from "module/activity/queries/useRejectTransactionRequest";
import useSignTransactionRequest from "module/activity/queries/useSignTransactionRequest";
import { CompleteTransactionRequestDto } from "module/api/service";
import SignRequestModal from "module/common/component/feedback/SignRequestModal/SignRequestModal";
import { useTranslate } from "module/common/hook/useTranslate";
import SignTransactionRequestSuccess from "../../component/display/SignTransactionRequestSuccess/SignTransactionRequestSuccess";

export interface TransactionRequestScreenProps {
    transactionRequest: CompleteTransactionRequestDto;
}

export default function TransactionRequestScreen({ transactionRequest }: TransactionRequestScreenProps): JSX.Element {
    const {
        transactionToken,
        signInRequest: { signInToken, app },
        transaction,
    } = transactionRequest;

    const { name, image, description } = app;

    const translate = useTranslate();
    const { hideModal } = useModal();

    const closeTransactionRequestModal = () => hideModal(TransactionRequestModal.id);

    const { mutate: signTransaction, isLoading: isSigning, isSuccess: isSignSuccess, isError: isSignError } = useSignTransactionRequest();
    const { mutate: rejectTransaction, isLoading: isRejecting } = useRejectTransactionRequest();

    const handleReject = () => {
        rejectTransaction({ transactionRequestToken: transactionToken, requestBody: { signInToken } });
        closeTransactionRequestModal();
    };

    const handleSign = () => {
        signTransaction({
            transactionRequestToken: transactionToken,
            transactionBody: { signInToken, transaction, signedTransaction: "temporalString" },
        });
    };

    return (
        <SignRequestModal
            signRequest={handleSign}
            isLoading={isSigning}
            isSuccess={isSignSuccess}
            isError={isSignError}
            successMessage={translate("signedSuccess")}
            successDetails={<SignTransactionRequestSuccess transactionHash={transaction.transactionHash} />}
            onExited={isSignSuccess || isSignError ? closeTransactionRequestModal : undefined}
        >
            {({ showModal, isSuccess }) => (
                <SignRequestModalLayout
                    rejectTitle={translate("rejectTransaction")}
                    rejectMessage={translate("rejectTransactionDescription")}
                    onReject={handleReject}
                    onSign={showModal}
                    loading={isSigning || isRejecting}
                    disabled={isSuccess}
                >
                    <Col justifyContent="center" onStartShouldSetResponder={() => true}>
                        <SignRequestAppSummary
                            requestTitle={translate("confirmTransaction")}
                            name={name}
                            description={description}
                            image={image}
                        />
                    </Col>
                </SignRequestModalLayout>
            )}
        </SignRequestModal>
    );
}
