import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import CopyButton from "module/common/component/feedback/CopyButton/CopyButton";
import Button from "module/common/component/input/Button/Button";

export const ExplorerButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.borderRadiusSm,
}));

export const SuccessCopyButton = styled(CopyButton)(({ theme }) => ({
    borderRadius: theme.borderRadiusSm,
}));

export const TransactionHash = styled(Typography, { textAlign: "center", variant: "body3Regular" })(({ theme }) => ({
    color: theme.palette.overlay[900]["60%"],
}));
