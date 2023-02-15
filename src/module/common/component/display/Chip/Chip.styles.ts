import { ChipRootProps, ChipTextProps } from "./Chip.types";
import styled from "@peersyst/react-native-styled";
import { View, Text } from "react-native";

export const ChipRoot = styled(View)<ChipRootProps>(({ theme, variant, fullWidth }) => ({
    height: 28,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius,
    alignSelf: fullWidth ? undefined : "flex-start",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: variant === "filled" ? theme.palette.gray[700] : "transparent",
    ...(variant === "secondary" && {
        borderColor: theme.palette.mode === "dark" ? "transparent" : theme.palette.overlay[700]["8%"],
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.gray[200] : theme.palette.white,
    }),
    ...(variant === "primary" && {
        borderColor: "transparent",
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.gray[900] : theme.palette.gray[700],
    }),
}));

export const ChipText = styled(Text)<ChipTextProps>(({ theme, variant }) => ({
    ...theme.typography.body3Regular,
    ...(variant === "secondary" && {
        color: theme.palette.mode === "dark" ? theme.palette.gray[900] : theme.palette.overlay[900]["60%"],
    }),
    ...(variant === "primary" && {
        color: theme.palette.gray[0],
    }),
}));
