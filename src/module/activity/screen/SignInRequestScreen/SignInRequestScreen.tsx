import { useModal } from "@peersyst/react-native-components";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useState } from "react";
import { SignInRequestDto } from "module/api/service";
import useSignSignInRequest from "module/activity/queries/useSignSignInRequest";
import useRejectSignInRequest from "module/activity/queries/useRejectSignInRequest";
import SignInRequestModal from "module/activity/component/navigation/SignInRequestModal/SignInRequestModal";
import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import { useTranslate } from "module/common/hook/useTranslate";
import SignModal from "module/common/component/feedback/SignModal/SignModal";
import SignInRequestDetails from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";

export interface SignInRequestScreenProps {
    signInRequest: SignInRequestDto;
    onClose?: () => void;
}

const SignInRequestScreen = ({ signInRequest }: SignInRequestScreenProps): JSX.Element => {
    const { signInToken, app } = signInRequest;

    const { hideModal } = useModal();
    const translate = useTranslate();

    const [formWallet, setFormWallet] = useState<number | undefined>(undefined);

    const { serviceInstance, network } = useServiceInstance(formWallet);
    const { mutate: sign, isLoading: isSigning, isError: isSignError, isSuccess: isSignSuccess } = useSignSignInRequest(signInToken);
    const { mutate: decline, isLoading: isRejecting } = useRejectSignInRequest(signInToken);
    const modalLoading = isSigning || isRejecting;

    const closeSignInRequestModal = () => {
        hideModal(SignInRequestModal.id);
    };

    const handleReject = () => {
        decline();
        closeSignInRequestModal();
    };

    const handleOnPinConfirmed = () => {
        const address = serviceInstance?.getAddress();
        const metadata = { address: address!, network };
        sign({ metadata });
    };

    return (
        <SignModal
            onSign={handleOnPinConfirmed}
            isLoading={isSigning}
            isError={isSignError}
            isSuccess={isSignSuccess}
            onExited={closeSignInRequestModal}
            successMessage={translate("signInRequestSuccess")}
        >
            {({ showModal, isSuccess }) => (
                <SignRequestModalLayout
                    rejectTitle={translate("rejectConnection")}
                    rejectMessage={translate("rejectConnectionDescription")}
                    onReject={handleReject}
                    onSign={showModal}
                    signing={isSigning}
                    rejecting={isRejecting}
                    disabled={isSuccess || isSigning || isRejecting}
                >
                    <SignInRequestDetails
                        requestTitle={translate("signInRequest")}
                        app={app}
                        loading={modalLoading}
                        selectedWallet={formWallet}
                        onWalletChange={setFormWallet}
                        style={{ marginHorizontal: 20 }}
                    />
                </SignRequestModalLayout>
            )}
        </SignModal>
    );
};

export default SignInRequestScreen;
