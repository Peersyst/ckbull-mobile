import { useState } from "react";
import { BalanceProps } from "../Balance/Balance.types";
import useCkbConversion from "module/common/hook/useCkbConversion";
import settingsState from "module/settings/state/SettingsState";
import { useRecoilValue } from "recoil";
import Balance from "../Balance/Balance";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import { GestureResponderEvent } from "react-native";
import { FiatCKBBalanceDynamicProps } from "./FiatCKBBalance.types";

export default function FiatCKBBalance({ balance: ckbBalance, onPress, ...props }: BalanceProps): JSX.Element {
    const [showFiat, setCurrencyMode] = useState<boolean>(false);
    const { fiat } = useRecoilValue(settingsState);
    const { value: balanceInFiat } = useCkbConversion(ckbBalance.toString(), fiat);

    const changeCurrencyMode = (e: GestureResponderEvent) => {
        impactAsync(ImpactFeedbackStyle.Medium);
        setCurrencyMode((value) => !value);
        onPress?.(e);
    };

    const balanceProps: FiatCKBBalanceDynamicProps = showFiat
        ? {
              balance: balanceInFiat,
              units: fiat,
              unitsPosition: "left",
          }
        : {
              balance: ckbBalance,
              units: "token",
              unitsPosition: "right",
          };

    return <Balance onPress={changeCurrencyMode} {...balanceProps} {...props} />;
}
