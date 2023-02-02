import useWalletState from "module/wallet/hook/useWalletState";
import AddWalletCard from "module/wallet/component/display/AddWalletCard/AddWalletCard";
import { JSXElementConstructor } from "react";
import { WalletSliderRoot } from "./WalletSlider.styles";
import { PagerViewStyle } from "@peersyst/react-native-components";
import { WalletComponentCardProps } from "module/wallet/component/surface/WalletCard/WalletCard";

export interface WalletSliderProps {
    Card: JSXElementConstructor<WalletComponentCardProps>;
    style?: PagerViewStyle;
}

const WalletSlider = ({ Card, style }: WalletSliderProps): JSX.Element => {
    const {
        state: { selectedWallet = 0, wallets },
        setSelectedWallet,
    } = useWalletState();

    const handleSelectedWallet = (page: number) => {
        setSelectedWallet(page);
    };

    return (
        <WalletSliderRoot
            page={selectedWallet}
            onPageSelected={handleSelectedWallet}
            showPageIndicator={true}
            gap={0}
            pagePadding={{ all: 16 }}
            style={style}
        >
            {wallets.map((wallet) => (
                <Card wallet={wallet} key={wallet.index} />
            ))}
            <AddWalletCard />
        </WalletSliderRoot>
    );
};

export default WalletSlider;
