import { Col, Row, SelectItem, Theme, useSelected } from "@peersyst/react-native-components";

import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";
import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";
import { DepositItemBalance, DepositItemText } from "./DepositItem.styles";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import { config } from "config";
import { getAPC } from "module/dao/utils/getAPC";

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
            <Col flex={1}>
                <Row>
                    <DepositItemBalance
                        type={type}
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
                <Col flex={1}>
                    <Row>
                        <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body2">
                            {translate("compensation") + ": "}
                        </DepositItemText>
                        <DepositItemBalance
                            type={type}
                            unlockable={unlockable}
                            selected={isSelected}
                            balance={convertShannonsToCKB(compensation)}
                            variant="body2"
                        />
                    </Row>
                    <DepositItemText type={type} unlockable={unlockable} selected={isSelected} variant="body2">
                        {unlockable ? translate("available") : translate("remaining_time") + ": " + formatTimeDAORemainingCycle(deposit)}
                    </DepositItemText>
                </Col>
            </Col>
        </SelectItem>
    );
};

export default DepositItem;
