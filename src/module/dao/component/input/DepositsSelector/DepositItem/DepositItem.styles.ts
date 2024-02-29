import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { DepositItemTextProps, getDepositItemTextColorParams } from "./DepositItem";
import Balance from "module/wallet/component/display/Balance/Balance";

const getDepositItemTextColor = ({ theme, type, unlockable }: getDepositItemTextColorParams) => {
    if (type === "deposit") return theme.palette.text;
    return unlockable ? theme.palette.status.success : theme.palette.status.warning;
};

export const DepositItemText = styled(Typography)<DepositItemTextProps>((props) => {
    const finalColor = getDepositItemTextColor(props);
    return {
        color: finalColor,
    };
});

export const DepositItemBalance = styled(Balance)<DepositItemTextProps>((props) => {
    const finalColor = getDepositItemTextColor(props);
    return {
        color: finalColor,
    };
});
