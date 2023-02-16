import SettingsScreen from "module/settings/screen/SettingsScreen";
import GeneralSettingsScreen from "module/settings/screen/GeneralSettingsScreen";
import SecuritySettingsScreen from "module/settings/screen/SecuritySettingsScreen";
import { SettingTab } from "stack-navigator";
import NavbarHeader from "module/common/component/navigation/NavbarHeader/NavbarHeader";

export enum SettingsScreens {
    SETTINGS = "SettingsMenu",
    GENERAL_SETTINGS = "GeneralSettings",
    SECURITY_SETTINGS = "SecuritySettings",
}

const SettingsNavigatorGroup = () => (
    <SettingTab.Navigator
        initialRouteName={SettingsScreens.SETTINGS}
        screenOptions={{ header: (props) => <NavbarHeader {...props} />, animation: "none" }}
    >
        <SettingTab.Screen name={SettingsScreens.SETTINGS} component={SettingsScreen} />
        <SettingTab.Screen name={SettingsScreens.GENERAL_SETTINGS} component={GeneralSettingsScreen} />
        <SettingTab.Screen name={SettingsScreens.SECURITY_SETTINGS} component={SecuritySettingsScreen} />
    </SettingTab.Navigator>
);

export default SettingsNavigatorGroup;
