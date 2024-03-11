import { useState } from "react";
import { BalanceProps } from "../Balance/Balance.types";
import useCkbConversion from "module/common/hook/useCkbConversion";
import settingsState from "module/settings/state/SettingsState";
import { useRecoilValue } from "recoil";
import Balance from "../Balance/Balance";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import { GestureResponderEvent } from "react-native";

export type FiatCKBBalanceProps = Omit<BalanceProps, "units" | "unitsPosition">;

export default function FiatCKBBalance({ balance: ckbBalance, onPress, ...props }: BalanceProps): JSX.Element {
    const [showFiat, setCurrencyMode] = useState<boolean>(false);
    const { fiat } = useRecoilValue(settingsState);
    const { value: balanceInFiat } = useCkbConversion(ckbBalance.toString(), fiat);

    const changeCurrencyMode = (e: GestureResponderEvent) => {
        impactAsync(ImpactFeedbackStyle.Medium);
        setCurrencyMode((value) => !value);
        onPress?.(e);
    };

    return (
        <Balance
            onPress={changeCurrencyMode}
            balance={showFiat ? balanceInFiat : ckbBalance}
            units={showFiat ? fiat : "token"}
            unitsPosition={showFiat ? "left" : "right"}
            {...props}
        />
    );
}
