import styled from "@peersyst/react-native-styled";
import { IconButton, Row } from "@peersyst/react-native-components";

export const NavbarRoot = styled(Row)(() => ({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minHeight: 64,
    padding: 20,
}));

export const BackIconRoot = styled(IconButton)(({ theme: { palette } }) => {
    const isLight = palette.mode === "light";
    return {
        position: "absolute",
        left: 20,
        color: isLight ? palette.gray[700] : palette.overlay[700]["48%"],
    };
});

export const ActionIconButtonRoot = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: 20,
    color: theme.palette.gray[theme.palette.mode === "light" ? "600" : "900"],
}));
