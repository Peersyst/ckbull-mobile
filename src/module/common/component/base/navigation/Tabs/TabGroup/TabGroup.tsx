import { useState } from "react";
import { TabGroupRoot } from "./TabGroup.styles";
import { TabIndicator } from "./TabIndicator";
import { TabGroupProps } from "./TabGroup.types";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

export default function TabGroup({ renderIndicator = true, indicatorStyle, children, style }: TabGroupProps) {
    const [layout, setLayout] = useState<LayoutRectangle>();

    const handleLayout = ({ nativeEvent: { layout: newLayout } }: LayoutChangeEvent) => {
        setLayout(newLayout);
    };

    return (
        <TabGroupRoot style={style} onLayout={handleLayout}>
            {children}
            {renderIndicator && <TabIndicator tabGroupLayout={layout} style={indicatorStyle} />}
        </TabGroupRoot>
    );
}
