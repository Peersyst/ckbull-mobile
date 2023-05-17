import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const DestructiveActionRoot = styled(Typography)(({ theme }) => ({
    color: theme.palette.status.error,
}));
