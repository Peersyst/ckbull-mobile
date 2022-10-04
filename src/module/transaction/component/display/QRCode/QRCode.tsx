import { useWindowDimensions } from "react-native";
import { Row } from "@peersyst/react-native-components";
import QRCodeBase from "react-native-qrcode-svg";
import useSelectedWallet from "module/wallet/hook/useSelectedWallet";
import { serviceInstancesMap } from "module/wallet/state/WalletState";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";

const QRCode = (): JSX.Element => {
    const network = useSelectedNetwork();
    const { index } = useSelectedWallet();
    const serviceInstance = serviceInstancesMap.get(index)?.[network];
    const { height: screenHeight } = useWindowDimensions();
    const height = screenHeight * 0.25;
    return (
        <Row justifyContent="center" testID="QRCode" style={{ marginTop: 25 }}>
            <QRCodeBase value={serviceInstance?.getAddress()} size={height} />
        </Row>
    );
};

export default QRCode;
