import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import MainTabsNavigator from "module/main/component/navigation/MainTabs/MainTabsNavigator/MainTabsNavigator";
import MainTabsContent from "module/main/component/navigation/MainTabs/MainTabsContent/MainTabsContent";
import { BaseTabsRoot } from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup.styles";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";

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
