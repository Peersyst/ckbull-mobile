import styled from "@peersyst/react-native-styled";
import { Text } from "react-native";
import { Modal } from "@peersyst/react-native-components";
import { DialogOptionProps } from "@peersyst/react-components-core";

export const DialogRoot = styled(Modal)(({ theme }) => ({
    width: "90%",
    maxWidth: "90%",
    backgroundColor: theme.palette.background,
}));

export const DialogTitle = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
}));

export const DialogMessage = styled(Text)(({ theme }) => ({
    color: theme.palette.text,
    fontSize: 14,
}));

export const DialogOption = styled(Text)<DialogOptionProps>(({ theme, type = "default" }) => {
    const color =
        type === "default" ? theme.palette.primary : type === "destructive" ? theme.palette.status.error : theme.palette.status.success;
    return {
        textAlign: "center",
        color,
        fontWeight: "bold",
        fontSize: 16,
    };
});
