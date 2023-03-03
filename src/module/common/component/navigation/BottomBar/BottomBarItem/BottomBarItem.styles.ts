import styled from "@peersyst/react-native-styled";
import { Pressable } from "react-native";
import { LinkItemIconProps, LinkTextProps } from "../BottomBar.types";
import { Icon, Typography } from "@peersyst/react-native-components";
import { BOTTOM_BAR_HORIZONTAL_PADDING } from "../BottomBar.styles";
import { config } from "config";

export const LinkItemText = styled(Typography, { textAlign: "center" })<LinkTextProps>(({ theme, isActive }) => ({
    color: isActive ? theme.palette.gray[900] : theme.palette.overlay[900]["48%"],
}));

export const LinkItemIcon = styled(Icon)<LinkItemIconProps>(({ theme, isActive }) => ({
    color: isActive ? theme.palette.gray[900] : theme.palette.overlay[900]["48%"],
    fontSize: 20,
}));

export const BottomBarItemRoot = styled(Pressable)(({ dimensions }) => ({
    width: (dimensions.width - 2 * BOTTOM_BAR_HORIZONTAL_PADDING) / (config.enableSignerApp ? 5 : 3),
}));
