import useGetBalance from "module/wallet/query/useGetBalance";
import settingsState from "module/settings/state/SettingsState";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import Balance from "../../display/Balance/Balance";
import WalletCard, { WalletComponentCardProps } from "module/wallet/component/surface/WalletCard/WalletCard";
import AccountCardButtons from "module/wallet/component/core/AccountCard/AccountCardButtons";
import useCkbConversion from "module/common/hook/useCkbConversion";

const AccountCard = ({ wallet, style }: WalletComponentCardProps): JSX.Element => {
    const { index, synchronizing } = wallet;
    const { fiat } = useRecoilValue(settingsState);
    const { data: { freeBalance = 0 } = {}, isLoading: isBalanceLoading } = useGetBalance(index);
    const [showFiat, setCurrencyMode] = useState<boolean>(false);
    const { value: balanceInFiat } = useCkbConversion(freeBalance.toString(), fiat);

    const isLoading = synchronizing || isBalanceLoading;

    const changeCurrencyMode = () => {
        impactAsync(ImpactFeedbackStyle.Medium);
        setCurrencyMode((value) => !value);
    };

    return (
        <WalletCard wallet={wallet} style={style}>
            {{
                content: (
                    <Balance
                        style={{ width: "100%" }}
                        loading={isLoading}
                        options={{ maximumFractionDigits: 2 }}
                        onPress={changeCurrencyMode}
                        balance={showFiat ? balanceInFiat : freeBalance}
                        variant="h1Strong"
                        units={showFiat ? fiat : "token"}
                        unitsPosition={showFiat ? "left" : "right"}
                    />
                ),
                footer: <AccountCardButtons />,
            }}
        </WalletCard>
    );
};

export default AccountCard;
