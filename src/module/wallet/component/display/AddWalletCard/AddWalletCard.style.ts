import styled from "@peersyst/react-native-styled";
import { PlusIcon } from "icons";
import { Col, Typography } from "@peersyst/react-native-components";

export const AddIcon = styled(PlusIcon)(({ theme }) => ({
    color: theme.palette.white,
    fontSize: 64,
}));

export const AddText = styled(Typography, { textTransform: "uppercase" })(({ theme }) => ({
    color: theme.palette.white,
    fontWeight: "bold",
}));

export const AddWalletCardRoot = styled(Col)(({ theme }) => ({
    width: "100%",
    height: "100%",
    padding: 24,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: theme.palette.secondary,
}));

export const ContentRoot = styled(Col, { justifyContent: "center", gap: 20 })(() => ({
    height: "100%",
    backgroundColor: "red",
}));
