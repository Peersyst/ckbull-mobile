import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";

export const DAOCardRoot = styled(Col, { gap: 24 })(({ theme }) => ({
    padding: 24,
    overflow: "hidden",
    backgroundColor: theme.palette.overlay[100]["12%"],
    borderRadius: 20,
}));
