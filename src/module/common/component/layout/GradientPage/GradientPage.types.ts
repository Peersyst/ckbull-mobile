import { ViewProps, ViewStyle } from "react-native";

export type GradientPageProps = Omit<ViewProps, "style"> & {
    gradient?: boolean;
    style?: Omit<ViewStyle, "backgroundColor"> & { backgroundColor?: string; secondaryBackgroundColor?: string };
    start?: { x: number; y: number };
    end?: { x: number; y: number };
};
