import { TabPanel } from "@peersyst/react-native-components";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { BaseTabsRoot } from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup.styles";

const FloatingTabsContent = ({ tabs }: TabsComponentProps): JSX.Element => {
    return (
        <BaseTabsRoot>
            {tabs.map(({ item }, index) => {
                return (
                    <TabPanel key={index} index={index}>
                        {item}
                    </TabPanel>
                );
            })}
        </BaseTabsRoot>
    );
};

export default FloatingTabsContent;
