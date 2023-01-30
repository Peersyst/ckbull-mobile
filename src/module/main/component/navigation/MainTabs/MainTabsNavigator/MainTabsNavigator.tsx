import { TabGroup } from "module/main/component/navigation/MainTabs/MainTabs.styles";
import { MainTabsProps } from "module/main/component/navigation/MainTabs/MainTabs.types";
import { useTheme } from "@peersyst/react-native-components";
import BaseTab from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab";
import { View } from "react-native";

const MainTabsNavigator = ({ tabs }: MainTabsProps): JSX.Element => {
    const { palette } = useTheme();

    return (
        <TabGroup renderIndicator={true} indicator={<View style={{ backgroundColor: palette.green[200] }} />}>
            {tabs.map(({ title }, index) => {
                return (
                    <BaseTab key={index} index={index}>
                        {title}
                    </BaseTab>
                );
            })}
        </TabGroup>
    );
};

export default MainTabsNavigator;
