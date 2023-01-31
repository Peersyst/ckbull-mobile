import { LogoPageIconRoot } from "./LogoPage.styles";
import { ReactNode, useEffect, useRef, useState } from "react";
import { LogoPageProvider } from "module/common/component/layout/LogoPage/LogoPageContext";
import { Animated } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { ThemeProvider } from "@peersyst/react-native-styled";
import darkTheme from "config/theme/darkTheme";
import ImageBackgroundPage from "../ImageBackgroundPage/ImageBackgroundPage";
import { LogoIcon } from "icons";

export interface LogoPageProps {
    children?: ReactNode;
}

const LogoPage = ({ children }: LogoPageProps): JSX.Element => {
    const [logoFlex, setLogoFlex] = useState(1);

    const logoAnim = useRef(new Animated.Value(1)).current;

    const {
        screen: { height },
    } = useDimensions();

    useEffect(() => {
        Animated.timing(logoAnim, {
            toValue: logoFlex,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [logoFlex, logoAnim]);

    return (
        <ThemeProvider theme={darkTheme}>
            <ImageBackgroundPage>
                <LogoPageIconRoot style={{ height: logoAnim.interpolate({ inputRange: [0, 1.3], outputRange: [0, height] }) }}>
                    <LogoIcon style={{ fontSize: 72 }} />
                </LogoPageIconRoot>
                <LogoPageProvider value={{ setLogoFlex }}>{children}</LogoPageProvider>
            </ImageBackgroundPage>
        </ThemeProvider>
    );
};

export default LogoPage;
