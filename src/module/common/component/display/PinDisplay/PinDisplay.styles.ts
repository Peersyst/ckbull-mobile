import styled from "@peersyst/react-native-styled";
import { Row } from "@peersyst/react-native-components";
import { Animated } from "react-native";

export const PinDisplayRoot = styled(Row, { gap: 48, alignItems: "center" })(() => ({
    height: 20,
}));

export const AnimatedPinDisplayRoot = Animated.createAnimatedComponent(PinDisplayRoot);
