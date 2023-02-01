import { FloatingTabsGroup, FloatingTabsNavigatorRoot } from "module/home/component/navigation/FloatingTabs/FloatingTabs.styles";
import BaseTab from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";

const FloatingTabsNavigator = ({ tabs }: TabsComponentProps): JSX.Element => {
    return (
        <DarkThemeProvider>
            <FloatingTabsNavigatorRoot>
                <FloatingTabsGroup>
                    {tabs.map(({ title }, index) => {
                        return (
                            <BaseTab key={index} index={index}>
                                {title}
                            </BaseTab>
                        );
                    })}
                </FloatingTabsGroup>
            </FloatingTabsNavigatorRoot>
        </DarkThemeProvider>
    );
};

export default FloatingTabsNavigator;
