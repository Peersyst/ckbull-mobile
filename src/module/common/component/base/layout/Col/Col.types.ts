import { FlexStyle, ViewProps } from "react-native";
import { ReactNode } from "react";

export interface ColProps extends ViewProps {
    children: ReactNode;
    gap?: number | string;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    flex?: number;
}
