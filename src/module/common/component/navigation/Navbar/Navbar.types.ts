import { StepsProps } from "module/common/component/display/Steps/Steps";
import { ViewStyle } from "react-native";

export interface NavbarProps {
    back?: boolean;
    onBack?: () => unknown;
    title?: string;
    steps?: StepsProps;
    style?: ViewStyle;
}
