import { LoadingModalProps } from "./LoadingModal.types";
import { LoadingModalButton, LoadingModalRoot, LoadingModalContent } from "./LoadingModal.styles";
import { useEffect, useState } from "react";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";
import { useTranslate } from "module/common/hook/useTranslate";
import { Backdrop, Col, Typography } from "@peersyst/react-native-components";
import ImageBackgroundPage from "../../layout/ImageBackgroundPage/ImageBackgroundPage";
import darkTheme from "config/theme/darkTheme";
import { ThemeProvider } from "@peersyst/react-native-styled";
import { LoadingIcon, SuccessIcon } from "icons";

const LoadingModal = ({
    open: openProp,
    loading,
    successMessage,
    successDetails,
    error,
    success,
    ...backdropProps
}: LoadingModalProps): JSX.Element => {
    const [open, setOpen] = useState(openProp);
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
            <LoadingModalRoot start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    {success ? (
                        <LoadingModalContent>
                            <Col flex={1} gap={32} justifyContent="center">
                                <Col alignItems="center" justifyContent="center" gap={14}>
                                    <SuccessIcon style={{ fontSize: 80, color: "white" }} />
                                    <Typography textAlign="center" color="white" variant="body2Strong">
                                        {successMessage}
                                    </Typography>
                                </Col>
                                {successDetails}
                            </Col>
                            <LoadingModalButton fullWidth onPress={handleClose}>
                                {translate("continue")}
                            </LoadingModalButton>
                        </LoadingModalContent>
                    ) : (
                        <ImageBackgroundPage>
                            <Col alignItems="center" justifyContent="center" gap={14} flex={1}>
                                <LoadingIcon style={{ fontSize: 80 }} />
                                <Typography textAlign="center" color="white" variant="body2Strong">
                                    {translate("processing")}
                                </Typography>
                            </Col>
                        </ImageBackgroundPage>
                    )}
                </ThemeProvider>
            </LoadingModalRoot>
        </Backdrop>
    );
};
export default LoadingModal;
