import { MainTabsGroup } from "module/main/component/navigation/MainTabs/MainTabs.styles";
import BaseTab from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";

const MainTabsNavigator = ({ tabs }: TabsComponentProps): JSX.Element => {
    return (
        <MainTabsGroup>
            {tabs.map(({ title }, index) => {
                return (
                    <BaseTab key={index} index={index} style={{ marginTop: 24 }}>
                        {title}
                    </BaseTab>
                );
            })}
        </MainTabsGroup>
    );
};

export default MainTabsNavigator;
