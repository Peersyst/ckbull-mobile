import { Row, SelectItem, Theme, useSelected } from "@peersyst/react-native-components";
import Balance from "module/wallet/component/display/Balance/Balance";
import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { DepositItemText } from "./DepositItem.styles";
import { getAPC } from "module/dao/utils/getAPC";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import { useTranslate } from "module/common/hook/useTranslate";
import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";

export interface DepositItemProps {
    amount: DAOUnlockableAmount["amount"];
    compensation: DAOUnlockableAmount["compensation"];
    value: number;
    selectedIndex: number;
    remainingCycleMinutes: DAOUnlockableAmount["remainingCycleMinutes"];
    unlockable: DAOUnlockableAmount["unlockable"];
    type: DAOUnlockableAmount["type"];
}

export interface DepositItemTextProps {
    unlockable: DAOUnlockableAmount["unlockable"];
    selected: boolean;
    type: DAOUnlockableAmount["type"];
}

export interface getDepositItemTextColorParams extends DepositItemTextProps {
    theme: Theme;
}

const DepositItem = ({
    value,
    selectedIndex,
    amount,
    remainingCycleMinutes,
    unlockable,
    compensation,
    type,
}: DepositItemProps): JSX.Element => {
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
                    units="CKB"
                    variant="body1"
                    boldUnits
                />
                <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body1">
                    {" (APC: " +
                        getAPC({ daoCompensation: convertShannonsToCKB(compensation), daoDeposit: convertShannonsToCKB(amount) }) +
                        "%)"}
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
                    units={"CKB"}
                    variant="body2"
                    boldUnits
                />
            </Row>
            <Row justifyContent="flex-start">
                <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body2">
                    {unlockable
                        ? translate("available")
                        : translate("remaining_time") + ": " + formatTimeDAORemainingCycle(remainingCycleMinutes)}
                </DepositItemText>
            </Row>
        </SelectItem>
    );
};

export default DepositItem;
