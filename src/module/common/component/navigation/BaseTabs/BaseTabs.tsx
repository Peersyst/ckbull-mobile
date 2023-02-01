import { Tabs } from "@peersyst/react-native-components";
import { ReactElement, ReactNode } from "react";

interface BaseTabsProps {
    children: { navbar: ReactElement; content: ReactNode };
}

const BaseTabs = ({ children: { navbar, content } }: BaseTabsProps): JSX.Element => {
    return (
        <Tabs gap={0} style={{ flex: 1 }}>
            {navbar}
            {content}
        </Tabs>
    );
};

export default BaseTabs;
