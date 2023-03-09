import useNavigation from "module/common/hook/useNavigation";
import { Row, Typography } from "@peersyst/react-native-components";
import SettingsTouchableCard from "../SettingsTouchableCard/SettingsTouchableCard";
import { RootStackParamsList } from "stack-navigator";
import { SettingsMenuChevron } from "./SettingsMenu.styles";

interface SettingsMenuProps {
    label: string;
    location: keyof RootStackParamsList;
}

const SettingsMenu = ({ label, location }: SettingsMenuProps): JSX.Element => {
    const navigation = useNavigation();
    return (
        <SettingsTouchableCard onPress={() => navigation.navigate(location)}>
            <Row justifyContent="space-between" alignItems="center" flex={1}>
                <Typography variant="body2Light">{label}</Typography>
                <SettingsMenuChevron />
            </Row>
        </SettingsTouchableCard>
    );
};

export default SettingsMenu;
