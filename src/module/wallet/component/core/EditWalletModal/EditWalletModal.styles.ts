import styled from "@peersyst/react-native-styled";
import CardModal from "module/common/component/navigation/CardModal/CardModal";

export const EditWalletModalRoot = styled(CardModal)(({ dimensions: { height } }) => ({
    height: height > 680 ? height * 0.585 : height * 0.55,
}));
