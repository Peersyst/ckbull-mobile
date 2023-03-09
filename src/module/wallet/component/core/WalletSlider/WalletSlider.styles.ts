import { PagerView } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const WALLET_SLIDER_MIN_HEIGHT = 225;

export const WalletSliderRoot = styled(PagerView)(({ theme: { palette }, dimensions: { height } }) => ({
    margin: 0,
    marginBottom: 0,
    minHeight: Math.max(height * 0.25, WALLET_SLIDER_MIN_HEIGHT),
    pagination: { dot: { backgroundColor: palette.overlay[900]["16%"], active: { backgroundColor: palette.white } } },
}));
