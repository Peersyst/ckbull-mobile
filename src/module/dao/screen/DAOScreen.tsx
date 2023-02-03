import BaseMainGradientScreen from "module/main/component/layout/BaseMainGradientScreen/BaseMainGradientScreen";
import { Col } from "@peersyst/react-native-components";
import DAOTabs from "../navigation/DAOTabs/DAOTabs";
import DAOSlider from "module/dao/component/core/DAOSlider/DAOSlider";

const DAOScreen = (): JSX.Element => {
    return (
        <BaseMainGradientScreen>
            <Col flex={1} gap="5%">
                <DAOSlider />
                <DAOTabs />
            </Col>
        </BaseMainGradientScreen>
    );
};

export default DAOScreen;
