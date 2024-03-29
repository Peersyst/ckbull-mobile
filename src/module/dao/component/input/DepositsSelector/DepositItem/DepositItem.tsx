import { Row, SelectItem, Theme, useSelected } from "@peersyst/react-native-components";
import Balance from "module/wallet/component/display/Balance/Balance";
import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { DepositItemText } from "./DepositItem.styles";
import { getAPC } from "module/dao/utils/getAPC";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import { useTranslate } from "module/common/hook/useTranslate";
import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";
import { config } from "config";

export interface DepositItemProps {
    deposit: DAOUnlockableAmount;
    value: number;
    selectedIndex: number;
}

export interface DepositItemTextProps {
    unlockable: DAOUnlockableAmount["unlockable"];
    selected: boolean;
    type: DAOUnlockableAmount["type"];
}

export interface getDepositItemTextColorParams extends DepositItemTextProps {
    theme: Theme;
}

const DepositItem = ({ value, selectedIndex, deposit }: DepositItemProps): JSX.Element => {
    const { amount, unlockable, compensation, type } = deposit;
    const isSelected = useSelected(value, selectedIndex, false);
    const translate = useTranslate();
    const formatTimeDAORemainingCycle = useFormatTimeDAORemainingCycle();

    return (
        <SelectItem value={value} key={value}>
            <Row justifyContent="flex-start">
                <DepositItemText
                    type={type}
                    as={Balance}
                    unlockable={unlockable}
                    selected={isSelected}
                    balance={convertShannonsToCKB(amount)}
                    variant="body1"
                    units={config.tokenName}
                />
                <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body1">
                    {" (APC: " + getAPC({ daoCompensation: compensation, daoDeposit: amount }) + "%)"}
                </DepositItemText>
            </Row>
            <Row justifyContent="flex-start">
                <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body2">
                    {translate("compensation") + ": "}
                </DepositItemText>
                <DepositItemText
                    type={type}
                    as={Balance}
                    unlockable={unlockable}
                    selected={isSelected}
                    balance={convertShannonsToCKB(compensation)}
                    variant="body2"
                />
            </Row>
            <Row justifyContent="flex-start">
                <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body2">
                    {unlockable ? translate("available") : translate("remaining_time") + ": " + formatTimeDAORemainingCycle(deposit)}
                </DepositItemText>
            </Row>
        </SelectItem>
    );
};

export default DepositItem;
