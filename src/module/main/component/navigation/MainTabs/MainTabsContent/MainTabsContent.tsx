import { Col, TabPanel } from "@peersyst/react-native-components";
import { TabsComponentProps } from "module/common/component/navigation/BaseTabs/BaseTabs.types";

const MainTabsContent = ({ tabs }: TabsComponentProps): JSX.Element => {
    return (
        <Col flex={1}>
            {tabs.map(({ item }, index) => {
                return (
                    <TabPanel key={index} index={index}>
                        {item}
                    </TabPanel>
                );
            })}
        </Col>
    );
};

export default MainTabsContent;
