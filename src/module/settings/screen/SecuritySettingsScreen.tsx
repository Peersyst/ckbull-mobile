import BaseSecondaryScreen from "module/common/component/layout/BaseSecondaryScreen/BaseSecondaryScreen";
import { Col } from "@peersyst/react-native-components";
import ChangePasscode from "module/settings/components/core/ChangePassCode/ChangePasscode";
import WalletsBackup from "module/settings/components/core/WalletsBackup/WalletsBackup";
import DeleteData from "module/settings/components/core/DeleteData/DeleteData";
import DeleteOneWallet from "module/settings/components/core/DeleteOneWallet/DeleteOneWallet";
import BiometricsSwitch from "module/settings/components/core/BiometricsSwitch/BiometricsSwitch";

const SecuritySettingsScreen = (): JSX.Element => {
    return (
        <BaseSecondaryScreen>
            <Col gap={10}>
                <BiometricsSwitch />
                <ChangePasscode />
                <WalletsBackup />
                <DeleteOneWallet />
                <DeleteData />
            </Col>
        </BaseSecondaryScreen>
    );
};

export default SecuritySettingsScreen;
