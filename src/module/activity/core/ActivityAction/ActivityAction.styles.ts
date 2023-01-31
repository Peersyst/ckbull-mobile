import styled from "@peersyst/react-native-styled";
import { IconButton } from "@peersyst/react-native-components";

export const ActivityActionIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.overlay[300]["48%"],
}));
