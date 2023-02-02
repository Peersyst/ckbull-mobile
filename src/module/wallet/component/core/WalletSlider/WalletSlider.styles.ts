import { PagerView } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const WalletSliderRoot = styled(PagerView)(({ theme: { palette }, dimensions: { height } }) => ({
    margin: 0,
    marginBottom: 0,
    minHeight: Math.max(height * 0.285, 215),
    pagination: { dot: { backgroundColor: palette.overlay[100]["12%"], active: { backgroundColor: palette.white } } },
}));
