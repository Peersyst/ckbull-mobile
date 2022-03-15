import { translate } from "locale";
import LogoPage from "module/common/component/layout/LogoPage/LogoPage";
import GlassNavigator from "module/common/component/navigation/GlassNavigator/GlassNavigator";
import { Col } from "react-native-components";
import ReceiveCard from "../component/core/ReceiveCard/ReceiveCard";
import QRCode from "../component/display/QRCode/QRCode";

const ReceiveScreen = (): JSX.Element => {
    return (
        <LogoPage>
            <GlassNavigator navbar={{ back: true, title: translate("receive") }}>
                <Col gap={30}>
                    <QRCode />
                    <ReceiveCard />
                </Col>
            </GlassNavigator>
        </LogoPage>
    );
};

export default ReceiveScreen;