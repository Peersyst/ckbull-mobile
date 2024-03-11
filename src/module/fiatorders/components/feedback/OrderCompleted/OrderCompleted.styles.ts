import styled from "@peersyst/react-native-styled";
import { CircleCheckIcon } from "icons";
import { CardModalBodyWrapper } from "module/common/component/navigation/CardModal/CardModal.styles";

export const OrderCompletedIcon = styled(CircleCheckIcon)(({ theme }) => ({
    color: theme.palette.primary,
    fontSize: 60,
}));

export const OrderCompletedRoot = styled(CardModalBodyWrapper)(() => ({
    flex: 1,
}));
