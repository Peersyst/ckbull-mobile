import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface TabsProps {
    /**
     * Tabs index
     */
    index?: number;
    /**
     * OnChange handler
     */
    onIndexChange?: (index: number) => unknown;
    /**
     * Initial tab index
     */
    initialIndex?: number;
    /**
     * Space between TabGroup and TabPanels
     */
    gap?: string | number;
    /**
     * Tabs styles
     */
    style?: ViewStyle;
    /**
     * Tabs children
     */
    children?: ReactNode;
}
