import { NavbarProps } from "module/common/component/navigation/Navbar/Navbar.types";
import { ReactNode } from "react";
import Navbar from "module/common/component/navigation/Navbar/Navbar";
import { View } from "react-native";
import { Col } from "react-native-components";
import Toolbar from "module/common/component/layout/Toolbar/Toolbar";

export interface BaseMainScreenProps extends NavbarProps {
    children: ReactNode;
}

const BaseMainScreen = ({ children, ...navbarProps }: BaseMainScreenProps): JSX.Element => {
    return (
        <Col flex={1} gap={20}>
            {Object.entries(navbarProps).length > 0 && (
                <Toolbar style={{ marginTop: "4%" }}>
                    <Navbar {...navbarProps} />
                </Toolbar>
            )}
            <View style={{ flex: 1 }}>{children}</View>
        </Col>
    );
};

export default BaseMainScreen;
