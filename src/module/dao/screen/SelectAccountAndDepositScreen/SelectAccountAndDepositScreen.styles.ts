import styled from "@peersyst/react-native-styled";
import { Typography } from "@peersyst/react-native-components";

export const ErrorMessageText = styled(Typography)(({ theme }) => ({
    color: theme.palette.red,
}));
