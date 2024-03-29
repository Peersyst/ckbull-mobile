import { Switch, SwitchProps } from "@peersyst/react-native-components";
import SettingsCard from "../../display/SettingsCard/SettingsCard";

export interface SettingsSwitchProps extends SwitchProps {
    label: string;
}

const SettingsSwitch = (props: SettingsSwitchProps) => {
    return (
        <SettingsCard>
            <Switch LabelProps={{ variant: "body2Light", alignment: "space-between" }} {...props} />
        </SettingsCard>
    );
};

export default SettingsSwitch;
