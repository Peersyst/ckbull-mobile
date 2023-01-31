import styled from "@peersyst/react-native-styled";
import WalletSlider from "module/wallet/component/core/WalletSlider/WalletSlider";

export const DAOSliderRoot = styled(WalletSlider)(({ dimensions: { height } }) => ({
    minHeight: Math.max(height * 0.335, 265),
}));
