import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import MainTabsNavigator from "module/main/component/navigation/MainTabs/MainTabsNavigator/MainTabsNavigator";
import MainTabsContent from "module/main/component/navigation/MainTabs/MainTabsContent/MainTabsContent";
import { TabComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { BaseTabsRoot } from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup.styles";

const MainTabs = ({ tabs, style }: TabComponentProps): JSX.Element => {
    return (
        <BaseTabsRoot>
            <BaseTabs>
                {{
                    navbar: <MainTabsNavigator tabs={tabs} style={style} />,
                    content: <MainTabsContent tabs={tabs} />,
                }}
            </BaseTabs>
        </BaseTabsRoot>
    );
};

export default MainTabs;
