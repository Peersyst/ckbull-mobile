import { SelectItem } from "@peersyst/react-native-components";
import WalletItem from "./WalletItem";

export interface WalletSelectorItemProps {
    walletIndex: number;
}

const WalletSelectorItem = ({ walletIndex }: WalletSelectorItemProps): JSX.Element => {
    return (
        <SelectItem value={walletIndex} key={walletIndex}>
            <WalletItem index={walletIndex} />
        </SelectItem>
    );
};

export default WalletSelectorItem;
