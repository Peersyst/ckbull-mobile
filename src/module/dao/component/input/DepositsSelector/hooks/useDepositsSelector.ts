import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { useControlled } from "@peersyst/react-hooks";
import { useTranslate } from "module/common/hook/useTranslate";

import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";

interface UseDepositSelectProps {
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    deposits: DAOUnlockableAmount[];
}

export function useDepositsSelect({ defaultValue = 0, value, onChange, deposits }: UseDepositSelectProps) {
    const [selectedIndex, setSelectedIndex] = useControlled(defaultValue, value, onChange);
    const formatTimeDAORemainingCycle = useFormatTimeDAORemainingCycle();
    const translate = useTranslate();

    function onChangeDeposit(i: unknown) {
        setSelectedIndex(i as number);
    }

    const currentDeposit: DAOUnlockableAmount | undefined = deposits[selectedIndex];
    const disabled = deposits.length === 0;

    const hint = currentDeposit
        ? translate("remaining_time") + ": " + formatTimeDAORemainingCycle(currentDeposit.remainingCycleMinutes)
        : "";

    return {
        onChangeDeposit,
        selectedIndex,
        hint,
        disabled,
        currentDeposit,
    };
}
