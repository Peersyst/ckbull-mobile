import { Col, SwipeButton, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useTranslate } from "module/common/hook/useTranslate";
import { ReactNode } from "react";

interface SignModalLayoutProps {
    onReject: () => void;
    onSign: () => void;
    signing: boolean;
    rejecting: boolean;
    children: ReactNode;
    disabled: boolean;
}

export default function SignRequestModalLayout({
    onReject,
    onSign,
    children,
    signing,
    rejecting,
    disabled,
}: SignModalLayoutProps): JSX.Element {
    const translate = useTranslate();

    return (
        <Col justifyContent="space-between" style={{ height: "100%" }}>
            {children}
            <Col gap={12} justifyContent="center" alignItems="center">
                <Button variant="text" onPress={onReject} fullWidth loading={rejecting} disabled={disabled}>
                    {translate("rejectConnection")}
                </Button>
                <Typography variant="body2Light" textAlign="center" light>
                    {translate("or")}
                </Typography>
                <SwipeButton onSwipe={onSign} loading={signing} disabled={disabled} fullWidth>
                    {translate("slideToAccept")}
                </SwipeButton>
            </Col>
        </Col>
    );
}
