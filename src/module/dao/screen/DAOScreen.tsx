import { Col } from "@peersyst/react-native-components";
import DAOTabs from "../navigation/DAOTabs/DAOTabs";
import DAOSlider from "module/dao/component/core/DAOSlider/DAOSlider";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";

const DAOScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <Col flex={1} gap="5%">
                <DAOSlider />
                <DAOTabs />
            </Col>
        </BaseMainScreen>
    );
};

export default DAOScreen;
