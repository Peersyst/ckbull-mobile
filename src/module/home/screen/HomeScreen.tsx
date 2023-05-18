import { Col } from "@peersyst/react-native-components";
import AccountSlider from "module/home/component/core/AccountSlider";
import HomeTabs from "../component/navigation/HomeTabs/HomeTabs";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";

const HomeScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <Col flex={1}>
                <AccountSlider />
                <HomeTabs />
            </Col>
        </BaseMainScreen>
    );
};

export default HomeScreen;
