import styled from "@peersyst/react-native-styled";
import { IconButton } from "react-native-components";

export const BackIconRoot = styled(IconButton)(({ theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.darkGray2 : theme.palette.text,
    fontSize: 22,
}));
