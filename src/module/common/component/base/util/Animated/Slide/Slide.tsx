import { ComponentType, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, LayoutRectangle } from "react-native";
import { SlideConfig, SlideProps } from "./Slide.types";
import { classify } from "@peersyst/react-utils";
import getExitedPosition from "module/common/component/base/util/Animated/Slide/utils/getExitedPosition";
import useAnimatedTiming from "module/common/component/base/util/Animated/hooks/useAnimatedTiming";

export default function slide<P extends { style?: any; onLayout?: ((event: LayoutChangeEvent) => void) | undefined }>(
    Component: ComponentType<P>,
    { duration: configDuration = 500, delay: configDelay = 0, easing: configEasing, direction: directionConfig }: SlideConfig = {},
): ComponentType<P & SlideProps> {
    const AnimatedComponent = Animated.createAnimatedComponent(classify(Component));

    const Slide = ({
        duration = configDuration,
        delay = configDelay,
        easing = configEasing,
        in: inProp,
        direction = directionConfig,
        style: { opacity = 1, ...style } = {},
        unmountOnExit = false,
        onEnter,
        onEntered,
        onExit,
        onExited,
        ...rest
    }: P & SlideProps): JSX.Element => {
        const slideAnim = useRef(new Animated.Value(inProp ? 0 : opacity)).current;

        const [layout, setLayout] = useState<LayoutRectangle>();
        const handleLayout = ({ nativeEvent: { layout: eventLayout } }: LayoutChangeEvent): void => {
            if (!layout) setLayout(eventLayout);
        };

        const { mounted } = useAnimatedTiming(inProp, slideAnim, {
            toValue: { enter: 0, exit: getExitedPosition(layout || { width: 0, height: 0, x: 0, y: 0 }, direction || "left") },
            duration,
            delay,
            easing,
            onEnter,
            onEntered,
            onExit,
            onExited,
            unmountOnExit,
        });

        return mounted ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <AnimatedComponent
                style={{
                    ...style,
                    transform: [{ [direction === "left" || direction === "right" ? "translateX" : "translateY"]: slideAnim }],
                    opacity: layout ? opacity : 0,
                }}
                onLayout={handleLayout}
                {...rest}
            />
        ) : (
            <></>
        );
    };

    return Slide;
}