import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";
import GradientPage from "module/common/component/layout/GradientPage/GradientPage";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../input/Button/Button";

export const DarkLoadingModalOverlay = styled(View)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.overlay[500]["80%"] : "transparent",
}));

export const LoadingModalRoot = styled(GradientPage, { gradient: true })(({ theme: { palette } }) => ({
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: palette.gradient.greenDarkGreen[0],
    secondaryBackgroundColor: palette.gradient.greenDarkGreen[1],
}));

export const LoadingModalContent = styled(Col, { flex: 1, justifyContent: "space-between" })(() => ({
    paddingHorizontal: 20,
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

export const LoadingModalButton = styled(Button, { variant: "secondary" })(({ theme, safeAreaInsets, dimensions }) => ({
    color: theme.palette.white,
    position: "absolute",
    width: dimensions.width - 40,
    marginLeft: 20,
    bottom: safeAreaInsets.bottom + 30,
}));
