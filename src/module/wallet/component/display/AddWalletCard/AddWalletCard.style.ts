import styled from "@peersyst/react-native-styled";
import { PlusIcon } from "icons";
import { Col, Typography } from "@peersyst/react-native-components";
import { View } from "react-native";

export const AddIcon = styled(PlusIcon)(({ theme }) => ({
    color: theme.palette.white,
    fontSize: 64,
}));

export const AddText = styled(Typography, { textTransform: "uppercase" })(({ theme }) => ({
    color: theme.palette.white,
    fontWeight: "bold",
}));

export const AddWalletCardRoot = styled(View)(({ theme }) => ({
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.gray[500],
}));

export const ContentRoot = styled(Col, { justifyContent: "center", gap: 20 })(() => ({
    height: "100%",
    backgroundColor: "red",
}));
