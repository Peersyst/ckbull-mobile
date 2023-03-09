import styled from "@peersyst/react-native-styled";
import { ChevronRightIcon } from "icons";

export const SettingsMenuChevron = styled(ChevronRightIcon)(({ theme }) => ({
    fontSize: 20,
    color: theme.palette.mode === "light" ? theme.palette.overlay[300]["48%"] : theme.palette.overlay[700]["48%"],
}));
