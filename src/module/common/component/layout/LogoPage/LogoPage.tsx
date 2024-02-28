import { LogoPageIconRoot } from "./LogoPage.styles";
import { ReactNode, useEffect, useRef, useState } from "react";
import { LogoPageProvider } from "module/common/component/layout/LogoPage/LogoPageContext";
import { Animated, useWindowDimensions } from "react-native";
import ImageBackgroundPage from "../ImageBackgroundPage/ImageBackgroundPage";
import { LogoIcon } from "icons";
import DarkThemeProvider from "../../util/ThemeProvider/DarkThemeProvider";

export interface LogoPageProps {
    children?: ReactNode;
}

const AnimatedLogoPageIconRoot = Animated.createAnimatedComponent(LogoPageIconRoot);

const LogoPage = ({ children }: LogoPageProps): JSX.Element => {
    const [logoFlex, setLogoFlex] = useState(1);

    const logoAnim = useRef(new Animated.Value(1)).current;

    const { height } = useWindowDimensions();

    useEffect(() => {
        Animated.timing(logoAnim, {
            toValue: logoFlex,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [logoFlex, logoAnim]);

    return (
        <DarkThemeProvider>
            <ImageBackgroundPage>
                <AnimatedLogoPageIconRoot style={{ height: logoAnim.interpolate({ inputRange: [0, 1], outputRange: [0, height] }) }}>
                    <LogoIcon style={{ fontSize: 72 }} />
                </AnimatedLogoPageIconRoot>
                <LogoPageProvider value={{ setLogoFlex }}>{children}</LogoPageProvider>
            </ImageBackgroundPage>
        </DarkThemeProvider>
    );
};

export default LogoPage;
