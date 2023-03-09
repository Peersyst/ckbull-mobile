import { TouchableHighlightProps, TouchableOpacity, ViewStyle } from "react-native";
import SettingsCard from "../../display/SettingsCard/SettingsCard";

type SettingsTouchableCardProps = TouchableHighlightProps & {
    cardStyle?: ViewStyle;
};

const SettingsTouchableCard = ({ children, cardStyle, ...rest }: SettingsTouchableCardProps) => {
    return (
        <TouchableOpacity activeOpacity={0.75} {...rest}>
            <SettingsCard style={cardStyle}>{children}</SettingsCard>
        </TouchableOpacity>
    );
};

export default SettingsTouchableCard;
