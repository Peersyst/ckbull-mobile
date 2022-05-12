import styled from "@peersyst/react-native-styled";
import { TransactionStatus } from "ckb-peersyst-sdk";
import { Typography } from "react-native-components";
import transactionStatusMappings from "../../utils/transactionStatusMappings";

export interface TransactionStatusRootProps {
    status: TransactionStatus;
}

export const TransactionStatusRoot = styled(Typography)<TransactionStatusRootProps>(({ theme, status }) => ({
    color: theme.palette.status[transactionStatusMappings[status]],
    fontStyle: "italic",
}));
