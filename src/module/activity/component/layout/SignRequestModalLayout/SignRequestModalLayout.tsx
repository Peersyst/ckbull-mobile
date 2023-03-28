import { Col, SwipeButton, Typography, useModal } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import useCancelableDialog from "module/common/hook/useCancelableDialog";
import { useTranslate } from "module/common/hook/useTranslate";
import { ReactNode } from "react";
import TransactionRequestModal from "../../navigation/TransactionRequestModal/TransactionRequestModal";

interface SignModalLayoutProps {
    rejectTitle: string;
    rejectMessage: string;
    onReject: () => void;
    onSign: () => void;
    loading: boolean;
    disabled: boolean;
    children: ReactNode;
}

export default function SignRequestModalLayout({
    rejectTitle,
    rejectMessage,
    onReject,
    onSign,
    children,
    loading,
    disabled,
}: SignModalLayoutProps): JSX.Element {
    const translate = useTranslate();
    const { hideModal } = useModal();
    const { showCancelableDialog, hideDialog } = useCancelableDialog();

    const handleConfirmReject = () => {
        onReject();
        hideDialog();
    };

    const handleReject = () => {
        hideModal(TransactionRequestModal.id);
        showCancelableDialog({
            title: rejectTitle,
            content: rejectMessage,
            buttons: [
                {
                    text: translate("reject"),
                    type: "destructive",
                    action: handleConfirmReject,
                    variant: "filled",
                },
            ],
        });
    };

    return (
        <Col justifyContent="space-between" style={{ height: "100%" }}>
            {children}
            <Col gap={12} justifyContent="center" alignItems="center">
                <Button variant="text" onPress={handleReject} fullWidth>
                    {translate("rejectConnection")}
                </Button>
                <Typography variant="body2Light" textAlign="center" light>
                    {translate("or")}
                </Typography>
                <SwipeButton onSwipe={onSign} loading={loading} disabled={disabled} fullWidth>
                    {translate("slideToAccept")}
                </SwipeButton>
            </Col>
        </Col>
    );
}
