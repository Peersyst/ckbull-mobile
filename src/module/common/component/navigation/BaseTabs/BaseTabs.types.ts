import { ReactElement } from "react";
import { ViewStyle } from "react-native";

export type TabItem = {
    title: string;
    item: ReactElement;
};

export interface TabComponentProps {
    tabs: TabItem[];
    style?: ViewStyle;
}
