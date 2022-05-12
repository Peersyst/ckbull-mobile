import { TransitionDelay, TransitionDuration } from "module/common/component/base/util/Animated";
import { useEffect, useState } from "react";
import { Animated } from "react-native";
import { getDelay, getDuration } from "module/common/component/base/util/Animated/helpers";

export interface AnimatedTimingConfig {
    toValue: { enter: number; exit: number };
    duration: TransitionDuration;
    delay: TransitionDelay;
    easing?: ((value: number) => number) | undefined;
    unmountOnExit: boolean;
    onEnter?: () => unknown;
    onEntered?: () => unknown;
    onExit?: () => unknown;
    onExited?: () => unknown;
}

export interface UseAnimatedTimingResult {
    mounted: boolean;
}

export default function useAnimatedTiming(
    inValue: boolean,
    value: Animated.AnimatedValue,
    { toValue, duration, delay, easing, unmountOnExit, onEnter, onEntered, onExit, onExited }: AnimatedTimingConfig,
): UseAnimatedTimingResult {
    const [mounted, setMounted] = useState(inValue);

    useEffect(() => {
        if (inValue) {
            setMounted(true);
            onEnter?.();
            Animated.timing(value, {
                toValue: toValue.enter,
                duration: getDuration(duration, "enter"),
                delay: getDelay(delay, "enter"),
                easing,
                useNativeDriver: false,
            }).start(onEntered);
        } else {
            if (mounted) {
                onExit?.();
                Animated.timing(value, {
                    toValue: toValue.exit,
                    duration: getDuration(duration, "exit"),
                    delay: getDelay(delay, "exit"),
                    easing,
                    useNativeDriver: false,
                }).start(() => {
                    setMounted(false);
                    onExited?.();
                });
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inValue]);

    return { mounted: !unmountOnExit || mounted };
}
