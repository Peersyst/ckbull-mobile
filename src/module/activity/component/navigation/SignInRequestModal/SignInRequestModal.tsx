import SwipableModal from "module/common/component/navigation/SwipableModal/SwipableModal";
import { createModal, Form, useModal } from "@peersyst/react-native-components";
import { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";
import SignInRequestSummary from "module/activity/component/display/SignInRequestSummary/SignInRequestSummary";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useEffect, useState } from "react";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import useHandleSignInRequest from "module/activity/hook/useHandleSignInRequest";
import { SignInRequestDto } from "module/api/service";

interface SignInRequestModalProps extends Omit<CardModalProps, "children"> {
    signInRequest: SignInRequestDto;
}

interface SignSignInRequestForm {
    signer: number;
}

const SignInRequestModal = createModal<SignInRequestModalProps>(({ signInRequest, ...modalProps }): JSX.Element => {
    const { name, description, image } = signInRequest.app;

    const { hideModal } = useModal();

    const [formWallet, setFormWallet] = useState<number | undefined>(undefined);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [swiped, setSwiped] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const handleClose = () => hideModal(SignInRequestModal.id);

    const {
        sign,
        decline,
        loading: requestLoading,
    } = useHandleSignInRequest({ signInToken: signInRequest.signInToken, options: { onSuccess: handleClose } });

    const { serviceInstance, network } = useServiceInstance(formWallet);

    const handleReject = () => {
        decline();
        handleClose();
    };

    const handleSubmit = ({ signer }: SignSignInRequestForm) => {
        setSwiped(true);
        setFormWallet(signer);
        setShowConfirmation(true);
        setSwiped(false);
    };

    const onPinConfirmed = () => {
        const address = serviceInstance?.getAddress();
        const metadata = { address: address!, network };
        sign({ metadata });
    };

    useEffect(() => {
        setModalLoading(requestLoading || swiped);
    }, [requestLoading, swiped]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <SwipableModal title="Review Connection" dismissal="close" onReject={handleReject} loading={modalLoading} {...modalProps}>
                    <SignInRequestSummary name={name} image={image} description={description} loading={modalLoading} />
                </SwipableModal>
            </Form>
            <ConfirmPinModal open={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirmedExited={onPinConfirmed} />
        </>
    );
});

export default SignInRequestModal;
