import FloatingTabsNavigator from "module/home/component/navigation/FloatingTabs/FloatingTabsNavigator/FloatingTabsNavigator";
import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import FloatingTabsContent from "module/home/component/navigation/FloatingTabs/FloatingTabsContent/FloatingTabsContent";
import { TabComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";

const FloatingTabs = ({ tabs, style }: TabComponentProps): JSX.Element => {
    return (
        <BaseTabs>
            {{
                navbar: <FloatingTabsNavigator tabs={tabs} style={style} />,
                content: <FloatingTabsContent tabs={tabs} />,
            }}
        </BaseTabs>
    );
};

export default FloatingTabs;
