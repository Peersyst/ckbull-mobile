import styled from "@peersyst/react-native-styled";
import BlockchainAddress from "module/common/component/display/BlockchainAddress/BlockchainAddress";

export const TransactionHash = styled(BlockchainAddress, { textAlign: "center", variant: "body3Regular" })(({ theme }) => ({
    color: theme.palette.overlay[900]["60%"],
}));
