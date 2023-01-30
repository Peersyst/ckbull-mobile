import { Col, TabPanel } from "@peersyst/react-native-components";
import { MainTabsProps } from "module/main/component/navigation/MainTabs/MainTabs.types";

const MainTabsContent = ({ tabs }: MainTabsProps): JSX.Element => {
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
