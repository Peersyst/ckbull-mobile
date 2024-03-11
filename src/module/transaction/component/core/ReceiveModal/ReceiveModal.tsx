import { Col, createBackdrop, ExposedBackdropProps, Typography, useToast } from "@peersyst/react-native-components";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import QRCode from "module/transaction/component/display/QRCode/QRCode";
import Button from "module/common/component/input/Button/Button";
import * as Clipboard from "expo-clipboard";
import Container from "module/common/component/display/Container/Container";
import { useTranslate } from "module/common/hook/useTranslate";
import useWalletAddress from "module/wallet/hook/useWalletAddress";

const ReceiveModal = createBackdrop<ExposedBackdropProps>(({ close, ...rest }) => {
    const translate = useTranslate();
    const address = useWalletAddress();
    const { showToast } = useToast();

    const copyToClipboard = () => {
        Clipboard.setString(address || "");
        showToast(translate("address_copied"), { type: "success" });
        close();
    };

    return (
        <CardNavigatorModal navbar={{ back: true, title: translate("receive") }} {...rest}>
            <Col gap={24} flex={1} alignItems="center" justifyContent="flex-end">
                <QRCode />
                <Typography textAlign="center" variant="body3Regular" light>
                    {translate("receive_info")}
                </Typography>
                <Container>
                    <Typography variant="body2Strong" textAlign="center" textTransform="uppercase">
                        {address}
                    </Typography>
                </Container>
                <Button variant="primary" fullWidth onPress={copyToClipboard}>
                    {translate("copy")}
                </Button>
            </Col>
        </CardNavigatorModal>
    );
});

export default ReceiveModal;
