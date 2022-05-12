import useGetBalance from "module/wallet/query/useGetBalance";
import { TouchableWithoutFeedback, Vibration } from "react-native";
import { Wallet } from "module/wallet/state/WalletState";
import useWalletColorIndex from "module/wallet/hook/useWalletColorIndex";
import { WalletCardBalance, WalletCardRoot, WalletContent } from "./WalletCard.styles";
import WalletCardHeader from "./WalletCardHeader/WalletCardHeader";
import WalletCardButtons from "./WalletCardButtons/WalletCardButtons";
import settingsState from "module/settings/state/SettingsState";
import { useRecoilValue } from "recoil";
import { useGetCkbPrice } from "module/common/query/useCkbPriceConverter";
import useCkbConversion from "module/common/hook/useCkbConversion";
import { useState } from "react";
import { ControlledSuspense } from "react-native-components";

export interface WalletCardProps {
    wallet: Wallet;
}

export interface WalletCardRootProps {
    color: string;
}

const WalletCard = ({ wallet: { name, index, colorIndex } }: WalletCardProps): JSX.Element => {
    const color = useWalletColorIndex(colorIndex);
    const { fiat } = useRecoilValue(settingsState);
    const { data: balance } = useGetBalance(index);
    const { isLoading: loadingPrice } = useGetCkbPrice(fiat);
    const { value: fiatValue } = useCkbConversion(fiat, balance?.freeBalance || 0);
    const [showFiat, setCurrencyMode] = useState<boolean>(false);
    const changeCurrencyMode = () => {
        Vibration.vibrate();
        setCurrencyMode((value) => !value);
    };
    return (
        <WalletCardRoot color={color}>
            <WalletContent>
                <WalletCardHeader index={index} name={name} />
                <ControlledSuspense
                    isLoading={balance === undefined || (loadingPrice && showFiat)}
                    activityIndicatorColor="white"
                    activityIndicatorSize={25}
                >
                    <TouchableWithoutFeedback onPress={changeCurrencyMode}>
                        <WalletCardBalance
                            variant="h1"
                            balance={showFiat ? fiatValue : balance?.freeBalance || 0}
                            decimals={showFiat ? 2 : 6}
                            units={showFiat ? fiat : "ckb"}
                        />
                    </TouchableWithoutFeedback>
                </ControlledSuspense>
                <WalletCardButtons />
            </WalletContent>
        </WalletCardRoot>
    );
};

export default WalletCard;
