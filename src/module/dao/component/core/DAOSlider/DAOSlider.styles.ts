import styled from "@peersyst/react-native-styled";
import WalletSlider from "module/wallet/component/core/WalletSlider/WalletSlider";

export const DAOSliderRoot = styled(WalletSlider)(({ dimensions: { height } }) => {
    return {
        minHeight: Math.min(Math.max(height * 0.35, 255), 270),
    };
});
