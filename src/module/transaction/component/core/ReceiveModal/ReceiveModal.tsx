import { Col, createBackdrop, ExposedBackdropProps } from "@peersyst/react-native-components";
import GlassNavigatorModal from "module/common/component/navigation/GlassNavigatorModal/GlassNavigatorModal";
import { useTranslate } from "module/common/hook/useTranslate";
import QRCode from "module/transaction/component/display/QRCode/QRCode";
import ReceiveCard from "module/transaction/component/display/ReceiveCard/ReceiveCard";

const ReceiveModal = createBackdrop((props: ExposedBackdropProps) => {
    const translate = useTranslate();
    return (
        <GlassNavigatorModal navbar={{ back: true, title: translate("receive") }} {...props}>
            <Col gap={"5%"} flex={1}>
                <QRCode />
                <ReceiveCard />
            </Col>
        </GlassNavigatorModal>
    );
});

export default ReceiveModal;
