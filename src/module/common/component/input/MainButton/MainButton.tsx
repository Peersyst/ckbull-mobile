import { Col, ElementStyler, Typography, useModal } from "@peersyst/react-native-components";
import { ButtonProps } from "module/common/component/input/Button/Button.types";
import { ReactElement, useState } from "react";
import { MainButtonRoot } from "./MainButton.styles";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import QrScanner from "module/common/component/input/QrScanner/QrScanner";
import SignInRequestModal from "module/activity/component/navigation/SignInRequestModal/SignInRequestModal";

export interface MainButtonProps extends Omit<ButtonProps, "children" | "rounded" | "leftIcon" | "rightIcon" | "variant" | "size"> {
    icon: ReactElement;
    label?: string;
}

const MainButton = ({ icon, label, ...buttonProps }: MainButtonProps): JSX.Element => {
    const [scanQr, setScanQr] = useState(false);
    const { showModal } = useModal();
    const handleSignInRequest = (data: string) => {
        setScanQr(false);
        showModal(SignInRequestModal, { signInToken: data });
    };

    return (
        <DarkThemeProvider>
            <MainButtonRoot variant="primary" size="lg" onPress={() => setScanQr(true)} {...buttonProps}>
                <>
                    <Col alignItems={"center"} justifyContent="center">
                        <ElementStyler style={{ flex: 1 }}>{icon}</ElementStyler>
                        <Typography variant="body4Light" numberOfLines={1} adjustsFontSizeToFit>
                            {label}
                        </Typography>
                    </Col>
                    {scanQr && (
                        <QrScanner open={scanQr} onClose={() => setScanQr(false)} onScan={({ data }) => handleSignInRequest(data)} />
                    )}
                </>
            </MainButtonRoot>
        </DarkThemeProvider>
    );
};

export default MainButton;
