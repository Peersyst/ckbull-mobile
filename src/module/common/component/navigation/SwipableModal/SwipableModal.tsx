import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { Col, SwipeButton, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useTranslate } from "module/common/hook/useTranslate";

export interface SlideModalProps extends CardSelectModalProps {
    onReject: () => void;
    loading?: boolean;
}

const SwipableModal = ({ children, onReject, style, loading = false, ...modalProps }: SlideModalProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <CardSelectModal style={{ height: "95%", ...style }} {...modalProps}>
            <Col justifyContent="space-between" style={{ height: "100%" }}>
                {children}
                <Col gap={12} justifyContent="center" alignItems="center">
                    <Button variant="text" onPress={onReject} fullWidth>
                        {translate("rejectConnection")}
                    </Button>
                    <Typography variant="body2Light" textAlign="center" light>
                        {translate("or")}
                    </Typography>
                    <SwipeButton type="submit" loading={loading} disabled={loading} fullWidth>
                        {translate("slideToAccept")}
                    </SwipeButton>
                </Col>
            </Col>
        </CardSelectModal>
    );
};

export default SwipableModal;
