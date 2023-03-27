import { Col, Typography, useModal } from "@peersyst/react-native-components";
import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import TransactionRequestModal from "module/activity/component/navigation/TransactionRequestModal/TransactionRequestModal";
import useRejectTransactionRequest from "module/activity/queries/useRejectTransactionRequest";
import useSignTransactionRequest from "module/activity/queries/useSignTransactionRequest";
import SignRequestModal from "module/common/component/feedback/SignRequestModal/SignRequestModal";

export default function TransactionRequestScreen(): JSX.Element {
    const { hideModal } = useModal();

    const closeTransactionRequestModal = () => hideModal(TransactionRequestModal.id);

    const { mutate: signTransaction, isLoading: isSigning, isSuccess: isSignSuccess, isError: isSignError } = useSignTransactionRequest();
    const { mutate: rejectTransaction, isLoading: isRejecting } = useRejectTransactionRequest();

    const handleReject = () => {
        rejectTransaction();
    };

    const handleSign = () => {
        signTransaction();
    };

    return (
        <SignRequestModal
            signRequest={handleSign}
            isLoading={isSigning}
            isSuccess={isSignSuccess}
            isError={isSignError}
            successMessage={"Transaction signed successfully!"}
            onExited={isSignSuccess || isSignError ? closeTransactionRequestModal : undefined}
        >
            {({ showModal, isSuccess }) => (
                <SignRequestModalLayout onReject={handleReject} onSign={showModal} loading={isSigning || isRejecting} disabled={isSuccess}>
                    <Col justifyContent="center">
                        <Typography textAlign="center" variant="body2Strong">
                            This is transaction request modal
                        </Typography>
                    </Col>
                </SignRequestModalLayout>
            )}
        </SignRequestModal>
    );
}
