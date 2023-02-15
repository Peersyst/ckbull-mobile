import styled from "@peersyst/react-native-styled";
import { ChevronRightIcon } from "icons";

export const SettingsMenuChevron = styled(ChevronRightIcon)(({ theme }) => ({
    fontSize: 20,
    color: theme.palette.overlay[300]["48%"],
}));
