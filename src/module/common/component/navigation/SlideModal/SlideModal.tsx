import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { Col, SwipeButton, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";

export interface SlideModalProps extends CardSelectModalProps {
    onReject: () => void;
    loading?: boolean;
}

const SlideModal = ({ children, onReject, style, loading = false, onClose, ...modalProps }: SlideModalProps): JSX.Element => {
    const handleReject = () => {
        onClose?.();
        onReject();
    };

    return (
        <CardSelectModal style={{ height: "95%", ...style }} {...modalProps}>
            <Col justifyContent="space-between" style={{ height: "100%" }}>
                {children}
                <Col gap={12} justifyContent="center" alignItems="center">
                    <Button variant="text" onPress={handleReject} fullWidth>
                        Reject the connection
                    </Button>
                    <Typography variant="body2Light" textAlign="center" light>
                        or
                    </Typography>
                    <SwipeButton type="submit" loading={loading} disabled={loading} fullWidth>
                        Slide to accept
                    </SwipeButton>
                </Col>
            </Col>
        </CardSelectModal>
    );
};

export default SlideModal;
