import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";
import GradientPage from "module/common/component/layout/GradientPage/GradientPage";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const DarkLoadingModalOverlay = styled(View)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.overlay[500]["80%"] : "transparent",
}));

export const LoadingModalRoot = styled(GradientPage, { gradient: true })(() => ({
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
}));

export const LoadingModalContent = styled(Col, { flex: 1, justifyContent: "space-between" })(({ safeAreaInsets }) => ({
    paddingHorizontal: 20,
    paddingBottom: safeAreaInsets.bottom + 20,
}));

export const Gradient = styled(LinearGradient)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    elevation: -1,
    width: "100%",
    height: "100%",
}));
