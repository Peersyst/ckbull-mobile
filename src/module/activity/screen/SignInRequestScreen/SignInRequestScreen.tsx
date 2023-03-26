import { useModal } from "@peersyst/react-native-components";
import SignInRequestDetails from "module/activity/component/display/SignInRequestDetails/SignInRequestDetails";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useEffect, useState } from "react";
import { SignInRequestDto } from "module/api/service";
import useSignSignInRequest from "module/activity/queries/useSignSignInRequest";
import useRejectSignInRequest from "module/activity/queries/useRejectSignInRequest";
import SignRequestModal from "module/common/component/feedback/SignTransactionModal/SignRequestModal";
import SignInRequestModal from "module/activity/component/navigation/SignInRequestModal/SignInRequestModal";
import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import { useTranslate } from "module/common/hook/useTranslate";

export interface SignInRequestScreenProps {
    signInRequest: SignInRequestDto;
    onClose?: () => void;
}

const SignInRequestScreen = ({ signInRequest }: SignInRequestScreenProps): JSX.Element => {
    const { name, description, image } = signInRequest.app;
    const { signInToken } = signInRequest;

    const { hideModal } = useModal();
    const translate = useTranslate();

    const [formWallet, setFormWallet] = useState<number | undefined>(undefined);
    const [modalLoading, setModalLoading] = useState(false);

    const { serviceInstance, network } = useServiceInstance(formWallet);

    const closeSignInRequestModal = () => {
        hideModal(SignInRequestModal.id);
    };

    const { mutate: sign, isLoading: isSigning, isError: isSignError, isSuccess: isSignSuccess } = useSignSignInRequest(signInToken);
    const { mutate: decline, isLoading: isDeclining } = useRejectSignInRequest(signInToken);

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
        <SignRequestModal
            signRequest={onPinConfirmed}
            isLoading={isSigning}
            isError={isSignError}
            isSuccess={isSignSuccess}
            onExited={isSignSuccess || isSignError ? closeSignInRequestModal : undefined}
            successMessage={translate("signInRequestSuccess")}
        >
            {({ showModal, isSuccess }) => (
                <SignRequestModalLayout onReject={handleReject} onSign={showModal} loading={modalLoading} disabled={isSuccess}>
                    <SignInRequestDetails
                        name={name}
                        image={image}
                        description={description}
                        loading={modalLoading}
                        selectedWallet={formWallet}
                        onWalletChange={setFormWallet}
                    />
                </SignRequestModalLayout>
            )}
        </SignRequestModal>
    );
};

export default SignInRequestScreen;
