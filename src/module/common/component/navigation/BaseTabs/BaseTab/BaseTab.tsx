import { Tab, Typography, useTab } from "@peersyst/react-native-components";
import { ViewStyle } from "react-native";

export interface BaseTabProps {
    index: number;
    children: string;
    style?: ViewStyle;
}

const BaseTab = ({ children, index, style }: BaseTabProps): JSX.Element => {
    const activeIndex = useTab();
    const active = activeIndex === index;

    return (
        <Tab index={index} style={{ marginVertical: 20, marginHorizontal: 10, ...style }}>
            <Typography variant="body3Regular" textAlign="center" light={!active}>
                {children}
            </Typography>
        </Tab>
    );
};

export default BaseTab;
