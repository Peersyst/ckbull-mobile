import { Col, Dialog, SwipeButton, Typography } from "@peersyst/react-native-components";
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
    signingDisabled: boolean;
    rejectingDisabled: boolean;
}

export default function SignRequestModalLayout({
    rejectTitle,
    rejectMessage,
    onReject,
    onSign,
    children,
    signing,
    rejecting,
    signingDisabled,
    rejectingDisabled,
}: SignModalLayoutProps): JSX.Element {
    const translate = useTranslate();
    const [open, setOpen] = useState(false);

    const hideDialog = () => setOpen(false);

    const handleConfirmReject = () => {
        onReject();
        hideDialog();
    };

    const buttons = [
        {
            text: translate("reject"),
            type: "destructive",
            action: handleConfirmReject,
            variant: "filled",
        },
        {
            text: translate("cancel"),
            type: "default",
            action: () => setOpen(false),
            variant: "text",
        },
    ];

    return (
        <>
            <Col justifyContent="space-between" style={{ height: "100%" }}>
                {children}
                <Col gap={12} justifyContent="center" alignItems="center">
                    <Button variant="text" onPress={onReject} fullWidth loading={rejecting} disabled={rejectingDisabled}>
                        {translate("rejectConnection")}
                    </Button>
                    <Typography variant="body2Light" textAlign="center" light>
                        {translate("or")}
                    </Typography>
                    <SwipeButton onSwipe={onSign} loading={signing} disabled={signingDisabled} fullWidth>
                        {translate("slideToAccept")}
                    </SwipeButton>
                </Col>
            </Col>
            <Dialog open={open} onClose={() => setOpen(false)} title={rejectTitle} content={rejectMessage} buttons={buttons} />
        </>
    );
}
