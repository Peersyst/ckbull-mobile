import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { Col, SwipeButton, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useTranslate } from "module/common/hook/useTranslate";

export interface SlideModalProps extends CardSelectModalProps {
    onAltAction?: () => void;
    altActionMessage?: string;
    onSwipe?: () => void;
    loading?: boolean;
}

const SwipableModal = ({
    children,
    onAltAction,
    altActionMessage,
    style,
    loading = false,
    onSwipe,
    ...modalProps
}: SlideModalProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <CardSelectModal style={{ height: "95%", ...style }} {...modalProps}>
            <Col justifyContent="space-between" style={{ height: "100%" }}>
                {children}
                <Col gap={12} justifyContent="center" alignItems="center">
                    {altActionMessage && (
                        <Button variant="text" onPress={onAltAction} fullWidth>
                            {altActionMessage}
                        </Button>
                    )}
                    {altActionMessage && (
                        <Typography variant="body2Light" textAlign="center" light>
                            {translate("or")}
                        </Typography>
                    )}
                    <SwipeButton type="submit" onSwipe={onSwipe} loading={loading} disabled={loading} fullWidth>
                        {translate("slideToAccept")}
                    </SwipeButton>
                </Col>
            </Col>
        </CardSelectModal>
    );
};

export default SwipableModal;
