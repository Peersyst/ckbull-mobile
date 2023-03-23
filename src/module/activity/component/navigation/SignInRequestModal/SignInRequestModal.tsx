import SlideModal from "module/common/component/navigation/SlideModal/SlideModal";
import { createModal, Form, useModal } from "@peersyst/react-native-components";
import { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";
import useGetSignInRequest from "module/activity/queries/useGetSignInRequest";
import SignInRequestSummary from "module/activity/component/display/SignInRequestSummary/SignInRequestSummary";
import useSignSignInRequest from "module/activity/queries/useSignSignInRequest";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useState } from "react";
import confirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import useRejectSignInRequest from "module/activity/queries/useRejectSignInRequest";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";

interface SignInRequestModalProps extends Omit<CardModalProps, "children"> {
    signInToken: string;
}

interface SignSignInRequestForm {
    signer: number;
}

const SignInRequestModal = createModal<SignInRequestModalProps>(({ signInToken, ...modalProps }): JSX.Element => {
    const [formWallet, setFormWallet] = useState<number | undefined>(undefined);
    const { showModal, hideModal } = useModal();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onError = () => {
        hideModal(SignInRequestModal.id);
    };

    const { data, isLoading } = useGetSignInRequest(signInToken, { onError });
    const { mutate: signRequest, isLoading: isSigning } = useSignSignInRequest(signInToken);
    const { mutate: declineRequest, isLoading: isDeclining } = useRejectSignInRequest(signInToken);

    const { serviceInstance, network } = useServiceInstance(formWallet);

    const handleReject = () => {
        declineRequest();
        hideModal(SignInRequestModal.id);
    };

    const handleSubmit = ({ signer }: SignSignInRequestForm) => {
        setFormWallet(signer);
        setShowConfirmation(true);
    };

    const onPinConfirmed = () => {
        const address = serviceInstance?.getAddress();
        const metadata = { address: address!, network };
        signRequest({ metadata });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <SlideModal
                    title="Review Connection"
                    dismissal="close"
                    onReject={handleReject}
                    loading={isLoading || isSigning || isDeclining}
                    onClose={handleReject}
                    {...modalProps}
                >
                    <SignInRequestSummary name={data?.app.name} image={data?.app.image} description={data?.app.description} />
                </SlideModal>
            </Form>
            <ConfirmPinModal open={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirmedExited={onPinConfirmed} />
        </>
    );
});

export default SignInRequestModal;
