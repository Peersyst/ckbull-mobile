import { Animated, useWindowDimensions } from "react-native";
import { GradientPageProps } from "module/common/component/layout/GradientPage/GradientPage.types";
import { useTheme } from "@peersyst/react-native-styled";

import { useEffect, useRef } from "react";
import { GradientPageGradient, GradientPageRoot } from "module/common/component/layout/GradientPage/GradientPage.styles";

const GradientPage = ({
    gradient,
    style: { backgroundColor: backgroundColorStyle, secondaryBackgroundColor: secondaryBackgroundColorStyle, ...style } = {},
    children,
    start,
    end,
    ...rest
}: GradientPageProps): JSX.Element => {
    const { palette } = useTheme();

    const { width } = useWindowDimensions();

    const gradientAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(gradientAnim, {
            toValue: gradient ? 0 : width,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [gradient]);

    const backgroundColor = backgroundColorStyle || palette.gradient.greenViolet[0];
    const secondaryBackgroundColor = secondaryBackgroundColorStyle || palette.gradient.greenViolet[1];

    return (
        <GradientPageRoot style={{ backgroundColor, ...style }} {...rest}>
            {children}
            <GradientPageGradient
                colors={[backgroundColor, secondaryBackgroundColor]}
                start={{ x: 0, y: 0.5, ...start }}
                end={{ x: 1, y: 0.5, ...end }}
                style={{
                    transform: [{ translateX: gradientAnim }],
                }}
            />
        </GradientPageRoot>
    );
};

export default GradientPage;
