import { translate } from "locale";
import BaseSecondaryScreen from "module/common/component/layout/BaseSecondaryScreen/BaseSecondaryScreen";
import { BottomTabScreenNavigatonProps } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup.types";
import { Col } from "react-native-components";
import ChangeNode from "module/settings/components/core/ChangeNode/ChangeNode";

const GeneralSettingsScreen = ({ navigation }: BottomTabScreenNavigatonProps): JSX.Element => {
    return (
        <BaseSecondaryScreen navigation={navigation} title={translate("advanced_settings")} back={true}>
            <Col gap={20}>
                <ChangeNode />
            </Col>
        </BaseSecondaryScreen>
    );
};

export default GeneralSettingsScreen;
