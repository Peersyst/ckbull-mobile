import { MainTabsRoot } from "./MainTabs.styles";
import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import MainTabsNavigator from "module/main/component/navigation/MainTabs/MainTabsNavigator/MainTabsNavigator";
import MainTabsContent from "module/main/component/navigation/MainTabs/MainTabsContent/MainTabsContent";
import { MainTabsProps } from "module/main/component/navigation/MainTabs/MainTabs.types";

const MainTabs = ({ tabs }: MainTabsProps): JSX.Element => {
    return (
        <MainTabsRoot>
            <BaseTabs>
                {{
                    navbar: <MainTabsNavigator tabs={tabs} />,
                    content: <MainTabsContent tabs={tabs} />,
                }}
            </BaseTabs>
        </MainTabsRoot>
    );
};

export default MainTabs;
