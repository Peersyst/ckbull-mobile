import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import Button from "module/common/component/input/Button/Button";

export const SignSuccessButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.borderRadiusSm,
    height: 64,
}));

export const TransactionHash = styled(Typography, { textAlign: "center", variant: "body3Regular" })(({ theme }) => ({
    color: theme.palette.overlay[900]["60%"],
}));
