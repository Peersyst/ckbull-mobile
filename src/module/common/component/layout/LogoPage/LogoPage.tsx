import { LogoPageIconRoot } from "./LogoPage.styles";
import { ReactNode, useRef, useState } from "react";
import { LogoPageProvider } from "module/common/component/layout/LogoPage/LogoPageContext";
import { Animated } from "react-native";
import Logo from "module/common/component/display/Logo/Logo";
import { useDimensions } from "@react-native-community/hooks";
import { ThemeProvider } from "@peersyst/react-native-styled";
import darkTheme from "config/theme/darkTheme";
import ImageBackgroundPage from "../ImageBackgroundPage/ImageBackgroundPage";

export interface LogoPageProps {
    children?: ReactNode;
}

const LogoPage = ({ children }: LogoPageProps): JSX.Element => {
    const [, setLogoFlex] = useState(1);
    const [, setGradient] = useState(true);

    const logoAnim = useRef(new Animated.Value(1)).current;
    const {
        screen: { height },
    } = useDimensions();

    return (
        <ThemeProvider theme={darkTheme}>
            <ImageBackgroundPage>
                <LogoPageIconRoot style={{ height: logoAnim.interpolate({ inputRange: [0, 1.3], outputRange: [0, height] }) }}>
                    <Logo />
                </LogoPageIconRoot>
                <LogoPageProvider value={{ setLogoFlex, setGradient }}>{children}</LogoPageProvider>
            </ImageBackgroundPage>
        </ThemeProvider>
    );
};

export default LogoPage;
