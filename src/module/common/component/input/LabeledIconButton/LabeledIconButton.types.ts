import { TypographyProps } from "@peersyst/react-native-components";
import { IconButtonProps } from "../IconButton/IconButton";

export interface LabeledIconButtonProps extends IconButtonProps {
    label: string;
    labelColor?: TypographyProps["color"];
}
