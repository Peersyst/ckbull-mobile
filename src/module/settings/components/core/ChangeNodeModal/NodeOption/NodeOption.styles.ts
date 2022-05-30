import styled from "@peersyst/react-native-styled";
import { IconButton, Row, Typography } from "react-native-components";

export interface NodeOptionRootProps {
    selected: boolean;
}

export interface NodeOptionTextProps {
    selected: boolean;
}

export const NODE_OPTION_HEIGHT = 50;

export const NodeOptionRoot = styled(Row, { alignItems: "center" })<NodeOptionRootProps>(({ theme, selected }) => ({
    height: NODE_OPTION_HEIGHT,
    paddingHorizontal: 20,
    backgroundColor: selected ? theme.palette.darkGray2 : undefined,
}));

export const NodeOptionText = styled(Typography)<NodeOptionTextProps>(({ selected }) => ({
    color: selected ? "#FFFFFF" : "#000000",
    fontWeight: selected ? "bold" : "normal",
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
    height: "100%",
    borderRadius: 0,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.status.error,
    color: "#FFFFFF",
    fontSize: 18,
}));
