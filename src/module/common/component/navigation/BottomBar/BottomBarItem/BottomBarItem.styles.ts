import styled from "@peersyst/react-native-styled";
import { Pressable } from "react-native";
import { LinkItemIconProps, LinkTextProps } from "../BottomBar.types";
import { Icon, Typography } from "@peersyst/react-native-components";

export const LinkItemText = styled(Typography, { textAlign: "center" })<LinkTextProps>(({ theme, isActive }) => ({
    color: isActive ? theme.palette.gray[theme.palette.mode === "light" ? 600 : 900] : theme.palette.overlay[700]["48%"],
}));

export const LinkItemIcon = styled(Icon)<LinkItemIconProps>(({ theme, isActive }) => ({
    color: isActive ? theme.palette.gray[theme.palette.mode === "light" ? 600 : 900] : theme.palette.overlay[700]["48%"],
    fontSize: 20,
}));

export const BottomBarItemRoot = styled(Pressable)(() => ({
    width: "22%",
}));
