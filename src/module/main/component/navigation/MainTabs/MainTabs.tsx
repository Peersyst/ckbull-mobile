import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import MainTabsNavigator from "module/main/component/navigation/MainTabs/MainTabsNavigator/MainTabsNavigator";
import MainTabsContent from "module/main/component/navigation/MainTabs/MainTabsContent/MainTabsContent";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { BaseTabsRoot } from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup.styles";

const MainTabs = ({ tabs }: TabsComponentProps): JSX.Element => {
    return (
        <BaseTabsRoot>
            <BaseTabs>
                {{
                    navbar: <MainTabsNavigator tabs={tabs} />,
                    content: <MainTabsContent tabs={tabs} />,
                }}
            </BaseTabs>
        </BaseTabsRoot>
    );
};

export default MainTabs;
