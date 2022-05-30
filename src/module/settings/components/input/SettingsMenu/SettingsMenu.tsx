import useNavigation from "module/common/hook/useNavigation";
import { TouchableOpacity } from "react-native";
import { Typography } from "react-native-components";
import { RootStackParamsList } from "stack-navigator";
import { ArrowRightIcon } from "./SettingsMenu.styles";
import { SettingsMenuRoot } from "./SettingsMenu.styles";

interface SettingsMenuProps {
    label: string;
    location: keyof RootStackParamsList;
}

const SettingsMenu = ({ label, location }: SettingsMenuProps): JSX.Element => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(location)}>
            <SettingsMenuRoot>
                <Typography variant="body1">{label}</Typography>
                <ArrowRightIcon />
            </SettingsMenuRoot>
        </TouchableOpacity>
    );
};

export default SettingsMenu;
