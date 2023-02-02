import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";

export interface WalletCardRootProps {
    color: string;
}

export const WalletCardRoot = styled(Col)<WalletCardRootProps>(({ color }) => ({
    width: "100%",
    height: "100%",
    padding: 24,
    overflow: "hidden",
    backgroundColor: color,
    borderRadius: 20,
}));
