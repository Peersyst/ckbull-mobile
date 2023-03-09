import { Col } from "@peersyst/react-native-components";
import HomeSlider from "module/home/component/core/HomeSlider";
import HomeTabs from "../component/navigation/HomeTabs/HomeTabs";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";

const HomeScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <Col flex={1}>
                <HomeSlider />
                <HomeTabs />
            </Col>
        </BaseMainScreen>
    );
};

export default HomeScreen;
