import { IconButton, Row } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const CardSelectModalNavbar = styled(Row)(() => ({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64, //NAVBAR HEIGHT
    padding: 20,
}));

export const ActionIconRoot = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: 20,
    color: theme.palette.gray[theme.palette.mode === "light" ? "600" : "900"],
}));
