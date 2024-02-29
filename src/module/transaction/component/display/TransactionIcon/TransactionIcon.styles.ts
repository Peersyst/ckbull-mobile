import { Col, ElementStyler } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { alpha } from "@peersyst/react-utils";
import { TransactionIconCompponentProps } from "./TransactionIcon.types";

export const TransactionIconRoot = styled(Col)<TransactionIconCompponentProps>(({ theme: { palette }, active }) => ({
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: active ? alpha(palette.primary, 0.12) : palette.overlay[900]["6%"],
}));

export const TxIcon = styled(ElementStyler)<TransactionIconCompponentProps>(({ theme: { palette }, active }) => ({
    color: active ? palette.primary : palette.gray[900],
    fontSize: 20,
}));
