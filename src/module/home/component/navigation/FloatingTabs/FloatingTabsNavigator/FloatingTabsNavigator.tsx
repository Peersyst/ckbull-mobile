import { FloatingTabsGroup, FloatingTabsNavigatorRoot } from "module/home/component/navigation/FloatingTabs/FloatingTabs.styles";
import { useTheme } from "@peersyst/react-native-components";
import BaseTab from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab";
import { FloatingTabsProps } from "module/home/component/navigation/FloatingTabs/FloatingTabs.types";
import { View } from "react-native";

const FloatingTabsNavigator = ({ tabs }: FloatingTabsProps): JSX.Element => {
    const { palette } = useTheme();

    return (
        <FloatingTabsNavigatorRoot>
            <FloatingTabsGroup renderIndicator indicator={<View style={{ backgroundColor: palette.green[200] }} />}>
                {tabs.map(({ title }, index) => {
                    return (
                        <BaseTab key={index} index={index} alternative>
                            {title}
                        </BaseTab>
                    );
                })}
            </FloatingTabsGroup>
        </FloatingTabsNavigatorRoot>
    );
};

export default FloatingTabsNavigator;
