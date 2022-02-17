import { Animated, Easing, View } from "react-native";
import { useRef } from "react";
import loop = Animated.loop;
import { BlurView } from "expo-blur";

const LogoAnimation = ({ radius = 50 }: { radius: number }): JSX.Element => {
    return (
        <View style={{ backgroundColor: "#000000", width: 400, height: 400, alignItems: "center", justifyContent: "center" }}>
            <Circle color={"#E4AF4C"} size={radius * 2} degree={0} radius={radius} slot={0} />
            <Circle color={"#15C8BD"} size={radius * 2} degree={60} radius={radius} slot={2} />
            <Circle color={"#47B5D6"} size={radius * 2} degree={120} radius={radius} slot={4} />
            <Circle color={"#623EDF"} size={radius * 2} degree={180} radius={radius} slot={1} />
            <Circle color={"#924AD9"} size={radius * 2} degree={240} radius={radius} slot={3} />
            <Circle color={"#FF66B0"} size={radius * 2} degree={300} radius={radius} slot={5} />
            <BlurView intensity={80} style={{ width: 400, height: 400, alignItems: "center", justifyContent: "center" }} />
        </View>
    );
};

const animationTime = 8000;

const Circle = ({
    color,
    size,
    degree,
    radius,
    slot,
}: {
    color: string;
    size: number;
    degree: number;
    radius: number;
    slot: number;
}): JSX.Element => {
    const anim = useRef(new Animated.Value(degree / 360)).current;

    const translateX = anim.interpolate(interpolateCircularMotionOverX(size, radius));
    const translateY = anim.interpolate(interpolateCircularMotionOverY(size, radius));

    const scale = useRef(new Animated.Value(0.75)).current;

    const scaleAnimationDuration = animationTime / 6;
    const animationDelayStart = slot * scaleAnimationDuration;
    const animationDelayEnd = animationTime - scaleAnimationDuration * 2 - animationDelayStart;

    loop(
        Animated.parallel([
            Animated.loop(
                Animated.timing(anim, {
                    useNativeDriver: true,
                    toValue: degree / 360 + 1,
                    duration: animationTime,
                    easing: Easing.linear,
                }),
            ),
            Animated.sequence([
                Animated.delay(animationDelayStart),
                Animated.timing(scale, {
                    useNativeDriver: true,
                    toValue: 1.5,
                    duration: scaleAnimationDuration,
                    easing: Easing.linear,
                }),
                Animated.timing(scale, {
                    useNativeDriver: true,
                    toValue: 0.75,
                    duration: scaleAnimationDuration,
                    easing: Easing.linear,
                }),
                Animated.delay(animationDelayEnd),
            ]),
        ]),
    ).start();

    return (
        <Animated.View
            style={{
                width: size,
                height: size,
                borderRadius: size,
                backgroundColor: color,
                position: "absolute",
                transform: [
                    {
                        translateX,
                        translateY,
                        scale,
                    },
                ],
            }}
        />
    );
};

const interpolateCircularMotionOverX = (snapshot: number, radius: number) => {
    const inputRange = [];
    const outputRange = [];
    for (let i = 0; i <= snapshot * 2; ++i) {
        const value = i / snapshot;
        const move = Math.sin(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
    }
    return { inputRange, outputRange };
};

const interpolateCircularMotionOverY = (snapshot: number, radius: number) => {
    const inputRange = [];
    const outputRange = [];
    for (let i = 0; i <= snapshot * 2; ++i) {
        const value = i / snapshot;
        const move = -Math.cos(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
    }
    return { inputRange, outputRange };
};

export default LogoAnimation;
