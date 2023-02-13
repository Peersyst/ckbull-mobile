import { LoadingModalProps } from "./LoadingModal.types";
import { LoadingModalRoot, SuccessIcon, LoadingModalMessage } from "./LoadingModal.styles";
import { useEffect, useState } from "react";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";
import { useTranslate } from "module/common/hook/useTranslate";
import { Backdrop, Col } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import ImageBackgroundPage from "../../layout/ImageBackgroundPage/ImageBackgroundPage";
import darkTheme from "config/theme/darkTheme";
import { ThemeProvider } from "@peersyst/react-native-styled";
import { LoadingIcon } from "icons";

const LoadingModal = ({ loading, successMessage, error, success, ...backdropProps }: LoadingModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    const translate = useTranslate();

    useEffect(() => {
        if (!open) setOpen(loading || success || error);
        else if (error) setOpen(false);
    }, [loading, success, error]);

    useEffect(() => {
        if (success) {
            notificationAsync(NotificationFeedbackType.Success);
        }
    }, [success]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Backdrop
            open={open}
            closable={success}
            swipeable={false}
            onClose={handleClose}
            animationIn="fadeIn"
            animationOut="fadeOut"
            closeOnBackdropTap={false}
            {...backdropProps}
        >
            <LoadingModalRoot>
                <ThemeProvider theme={darkTheme}>
                    <ImageBackgroundPage>
                        {success ? (
                            <>
                                <Col alignItems="center" gap={14}>
                                    <SuccessIcon />
                                    <LoadingModalMessage textAlign="center" variant="body2Strong">
                                        {successMessage}
                                    </LoadingModalMessage>
                                </Col>
                                <Button fullWidth variant="secondary" onPress={handleClose}>
                                    {translate("continue")}
                                </Button>
                            </>
                        ) : (
                            <Col alignItems="center" justifyContent="center" gap={20} flex={1}>
                                <LoadingIcon style={{ fontSize: 80 }} />
                                <LoadingModalMessage textAlign="center" variant="body2Strong">
                                    {translate("processing")}
                                </LoadingModalMessage>
                            </Col>
                        )}
                    </ImageBackgroundPage>
                </ThemeProvider>
            </LoadingModalRoot>
        </Backdrop>
    );
};
export default LoadingModal;
