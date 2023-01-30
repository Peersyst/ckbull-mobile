import { Col, TabPanel } from "@peersyst/react-native-components";
import { MainTabsRoot } from "module/main/component/navigation/MainTabs/MainTabs.styles";
import { FloatingTabsProps } from "module/home/component/navigation/FloatingTabs/FloatingTabs.types";

const FloatingTabsContent = ({ tabs }: FloatingTabsProps): JSX.Element => {
    return (
        <Col flex={1}>
            <MainTabsRoot>
                {tabs.map(({ item }, index) => {
                    return (
                        <TabPanel key={index} index={index}>
                            {item}
                        </TabPanel>
                    );
                })}
            </MainTabsRoot>
        </Col>
    );
};

export default FloatingTabsContent;
