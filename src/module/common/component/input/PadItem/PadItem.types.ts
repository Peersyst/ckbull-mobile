import { StyleProp, ViewStyle } from "react-native";
import { RippleFunctionType } from "../../util/RippleAnimCircle/RippleAnimCircle.types";
import { ReactElement } from "react";

export type ZeroToNineType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type PadIconType = "X" | "<";

export type PadItemType = ZeroToNineType | PadIconType | ReactElement;

export interface PadItemProps {
    style?: StyleProp<ViewStyle>;
    item: PadItemType;
    onPress: RippleFunctionType;
}
