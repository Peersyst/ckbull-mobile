import { ButtonProps, Col, Dialog, DialogButton, SwipeButton, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useTranslate } from "module/common/hook/useTranslate";
import { ReactNode, useState } from "react";

interface SignModalLayoutProps {
    rejectTitle: string;
    rejectMessage: string;
    onReject: () => void;
    onSign: () => void;
    signing: boolean;
    rejecting: boolean;
    children: ReactNode;
    disabled: boolean;
    disabledMessage?: string;
}

export default function SignRequestModalLayout({
    rejectTitle,
    rejectMessage,
    onReject,
    onSign,
    children,
    signing,
    rejecting,
    disabled,
    disabledMessage,
}: SignModalLayoutProps): JSX.Element {
    const translate = useTranslate();
    const [open, setOpen] = useState(false);

    const showDialog = () => setOpen(true);
    const hideDialog = () => setOpen(false);

    const handleConfirmReject = () => {
        onReject();
        hideDialog();
    };

    const buttons: DialogButton<ButtonProps>[] = [
        {
            text: translate("reject"),
            type: "destructive",
            action: handleConfirmReject,
            variant: "primary",
        },
        {
            text: translate("cancel"),
            type: "default",
            action: () => setOpen(false),
            variant: "text",
        },
    ];

    return (
        <Col justifyContent="space-between" style={{ height: "100%" }}>
            {children}
            <Col gap={12} justifyContent="center" alignItems="center">
                <Button variant="text" onPress={showDialog} fullWidth loading={rejecting} disabled={disabled}>
                    {translate("rejectConnection")}
                </Button>
                <Typography variant="body2Light" textAlign="center" light>
                    {translate("or")}
                </Typography>
                <SwipeButton onSwipe={onSign} loading={signing} disabled={disabled} fullWidth>
                    {translate("slideToAccept")}
                </SwipeButton>
                {disabled && disabledMessage && (
                    <Typography variant="body2" textAlign="center">
                        {disabledMessage}
                    </Typography>
                )}
            </Col>
            <Dialog open={open} onClose={() => setOpen(false)} title={rejectTitle} content={rejectMessage} buttons={buttons} />
        </Col>
    );
}
