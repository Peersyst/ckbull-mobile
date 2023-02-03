import styled from "@peersyst/react-native-styled";
import WalletSlider from "module/wallet/component/core/WalletSlider/WalletSlider";

export const DAOSliderRoot = styled(WalletSlider)(({ dimensions: { height } }) => {
    return {
        minHeight: Math.max(height * 0.31, 250),
    };
});
