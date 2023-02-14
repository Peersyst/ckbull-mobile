import { LoadingModalProps } from "./LoadingModal.types";
import { LoadingModalRoot } from "./LoadingModal.styles";
import { useEffect, useState } from "react";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";
import { useTranslate } from "module/common/hook/useTranslate";
import { Backdrop, Col, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import ImageBackgroundPage from "../../layout/ImageBackgroundPage/ImageBackgroundPage";
import darkTheme from "config/theme/darkTheme";
import { ThemeProvider } from "@peersyst/react-native-styled";
import { LoadingIcon, SuccessIcon } from "icons";
import { useTheme } from "@peersyst/react-native-styled";

const LoadingModal = ({ loading, successMessage, error, success, ...backdropProps }: LoadingModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    const translate = useTranslate();
    const { palette } = useTheme();

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
            <LoadingModalRoot
                style={{ backgroundColor: palette.green[200], secondaryBackgroundColor: palette.green[800] }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
            >
                <ThemeProvider theme={darkTheme}>
                    {success ? (
                        <Col flex={1} style={{ paddingBottom: 30, paddingHorizontal: 20 }}>
                            <Col alignItems="center" justifyContent="center" gap={14} flex={1}>
                                <SuccessIcon style={{ fontSize: 80, color: "white" }} />
                                <Typography textAlign="center" color="white" variant="body2Strong">
                                    {successMessage}
                                </Typography>
                            </Col>
                            <Button fullWidth variant="secondary" colorBtn={palette.green[400]} onPress={handleClose}>
                                {translate("continue")}
                            </Button>
                        </Col>
                    ) : (
                        <ImageBackgroundPage>
                            <Col alignItems="center" justifyContent="center" gap={20} flex={1}>
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
