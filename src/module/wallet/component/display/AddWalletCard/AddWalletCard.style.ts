import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";

export const AddWalletCardRoot = styled(Col)(({ theme, dimensions }) => ({
    width: "100%",
    height: "100%",
    padding: Math.min(dimensions.height * 0.025, 24),
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: theme.palette.secondary,
}));
