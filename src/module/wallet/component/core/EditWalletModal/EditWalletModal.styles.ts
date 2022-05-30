import styled from "@peersyst/react-native-styled";
import GlassModal from "module/common/component/feedback/GlassModal/GlassModal";

export const EditWalletModalRoot = styled(GlassModal)(({ dimensions: { height } }) => ({
    height: height > 680 ? height * 0.6 : height * 0.55,
}));
