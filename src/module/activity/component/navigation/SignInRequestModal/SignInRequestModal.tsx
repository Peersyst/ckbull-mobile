import { createBackdrop } from "@peersyst/react-native-components";
import SignInRequestScreen, { SignInRequestScreenProps } from "module/activity/screen/SignInRequestScreen/SignInRequestScreen";
import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";

export interface SignInRequestModalProps extends SignInRequestScreenProps, Omit<CardSelectModalProps, "title" | "dismissal" | "children"> {}

const SignInRequestModal = createBackdrop(({ signInRequest, ...modalProps }: SignInRequestModalProps): JSX.Element => {
    return (
        <CardSelectModal title="Review connection" dismissal="close" style={{ height: "95%" }} {...modalProps}>
            <SignInRequestScreen signInRequest={signInRequest} />
        </CardSelectModal>
    );
});

export default SignInRequestModal;
