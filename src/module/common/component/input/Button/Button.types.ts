import { ButtonProps as BaseButtonProps } from "@peersyst/react-native-components";
import { ViewStyle } from "react-native";

export interface ButtonProps extends BaseButtonProps {
    /**
     * Button is rounded
     */
    rounded?: boolean | undefined;
    style?: Omit<ViewStyle, "backgroundColor"> & { backgroundColor?: string; secondaryBackgroundColor?: string };
}
