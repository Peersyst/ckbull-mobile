import { SelectItem } from "@peersyst/react-native-components";
import WalletItem from "./WalletItem";

export interface WalletSelectorItemProps {
    walletIndex: number;
    index?: number;
}

const WalletSelectorItem = ({ walletIndex, index }: WalletSelectorItemProps): JSX.Element => {
    return (
        <SelectItem value={walletIndex} key={index}>
            <WalletItem index={walletIndex} />
        </SelectItem>
    );
};

export default WalletSelectorItem;
