import BaseSecondaryScreen from "module/common/component/layout/BaseSecondaryScreen/BaseSecondaryScreen";
import { Col } from "@peersyst/react-native-components";
import SelectFee from "../components/core/SelectFee/SelectFee";
import SelectFiat from "../components/core/SelectFiat/SelectFiat";
import SelectLocale from "../components/core/SelectLocale/SelectLocale";
import SelectNetwork from "../components/core/SelectNetwork/SelectNetwork";
import SwitchTheme from "../components/core/SwitchTheme/SwitchTheme";

const GeneralSettingsScreen = (): JSX.Element => {
    return (
        <BaseSecondaryScreen>
            <Col gap={10}>
                <SwitchTheme />
                <SelectNetwork />
                <SelectFee />
                <SelectFiat />
                <SelectLocale />
            </Col>
        </BaseSecondaryScreen>
    );
};

export default GeneralSettingsScreen;
