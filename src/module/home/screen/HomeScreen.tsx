import { Col } from "@peersyst/react-native-components";
import HomeSlider from "module/home/component/core/HomeSlider";
import BaseMainGradientScreen from "module/main/component/layout/BaseMainGradientScreen/BaseMainGradientScreen";
import HomeTabs from "../component/navigation/HomeTabs";

const HomeScreen = (): JSX.Element => {
    return (
        <BaseMainGradientScreen style={{ backgroundColor: "#5F8AFA", secondaryBackgroundColor: "#4FD1D9" }}>
            <Col flex={1}>
                <HomeSlider />
                <HomeTabs />
            </Col>
        </BaseMainGradientScreen>
    );
};

export default HomeScreen;
