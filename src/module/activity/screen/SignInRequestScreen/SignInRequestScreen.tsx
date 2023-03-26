import { Col, SwipeButton, Typography, useModal } from "@peersyst/react-native-components";
import SignInRequestDetails from "module/activity/component/display/SignInRequestDetails/SignInRequestDetails";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useEffect, useState } from "react";
import { SignInRequestDto } from "module/api/service";
import { useTranslate } from "module/common/hook/useTranslate";
import useSignSignInRequest from "module/activity/queries/useSignSignInRequest";
import useRejectSignInRequest from "module/activity/queries/useRejectSignInRequest";
import SignRequestModal from "module/common/component/feedback/SignTransactionModal/SignRequestModal";
import Button from "module/common/component/input/Button/Button";
import SignInRequestModal from "module/activity/component/navigation/SignInRequestModal/SignInRequestModal";

export interface SignInRequestScreenProps {
    signInRequest: SignInRequestDto;
    onClose?: () => void;
}

const SignInRequestScreen = ({ signInRequest }: SignInRequestScreenProps): JSX.Element => {
    const { name, description, image } = signInRequest.app;
    const { signInToken } = signInRequest;
    const translate = useTranslate();

    const { hideModal } = useModal();

    const [formWallet, setFormWallet] = useState<number | undefined>(undefined);
    const [modalLoading, setModalLoading] = useState(false);

    const { serviceInstance, network } = useServiceInstance(formWallet);

    const closeSignInRequestModal = () => {
        hideModal(SignInRequestModal.id);
    };

    const { mutate: sign, isLoading: isSigning, isError: isSignError, isSuccess: isSignSuccess } = useSignSignInRequest(signInToken, {});
    const { mutate: decline, isLoading: isDeclining } = useRejectSignInRequest(signInToken, {});

    const handleReject = () => {
        decline();
        closeSignInRequestModal();
    };

    const onPinConfirmed = () => {
        const address = serviceInstance?.getAddress();
        const metadata = { address: address!, network };
        sign({ metadata });
    };

    useEffect(() => {
        setModalLoading(isSigning || isDeclining);
    }, [isSigning, isDeclining]);

    return (
        <SignRequestModal signRequest={onPinConfirmed} isLoading={isSigning} isError={isSignError} isSuccess={isSignSuccess}>
            {({ showModal, isLoading, isSuccess }) => (
                <Col justifyContent="space-between" style={{ height: "100%" }}>
                    <SignInRequestDetails name={name} image={image} description={description} loading={modalLoading} />
                    <Col gap={12} justifyContent="center" alignItems="center">
                        <Button variant="text" onPress={handleReject} fullWidth>
                            {translate("rejectConnection")}
                        </Button>
                        <Typography variant="body2Light" textAlign="center" light>
                            {translate("or")}
                        </Typography>
                        <SwipeButton onSwipe={showModal} loading={modalLoading || isLoading} disabled={isSuccess} fullWidth>
                            {translate("slideToAccept")}
                        </SwipeButton>
                    </Col>
                </Col>
            )}
        </SignRequestModal>
    );
};

export default SignInRequestScreen;
