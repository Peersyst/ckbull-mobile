import { Tabs } from "@peersyst/react-native-components";
import { ReactElement, ReactNode, useState } from "react";

interface BaseTabsProps {
    children: { navbar: ReactElement; content: ReactNode };
}

const BaseTabs = ({ children: { navbar, content } }: BaseTabsProps): JSX.Element => {
    const [index, setIndex] = useState(0);

    return (
        <Tabs gap={0} index={index} onIndexChange={setIndex} style={{ flex: 1 }}>
            {navbar}
            {content}
        </Tabs>
    );
};

export default BaseTabs;
