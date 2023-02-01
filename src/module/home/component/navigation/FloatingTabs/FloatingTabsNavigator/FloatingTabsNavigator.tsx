import { FloatingTabsGroup, FloatingTabsNavigatorRoot } from "module/home/component/navigation/FloatingTabs/FloatingTabs.styles";
import BaseTab from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab";
import { TabComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";

const FloatingTabsNavigator = ({ tabs }: TabComponentProps): JSX.Element => {
    return (
        <FloatingTabsNavigatorRoot>
            <DarkThemeProvider>
                <FloatingTabsGroup>
                    {tabs.map(({ title }, index) => {
                        return (
                            <BaseTab key={index} index={index} style={{ paddingVertical: 20, marginHorizontal: 10 }}>
                                {title}
                            </BaseTab>
                        );
                    })}
                </FloatingTabsGroup>
            </DarkThemeProvider>
        </FloatingTabsNavigatorRoot>
    );
};

export default FloatingTabsNavigator;
