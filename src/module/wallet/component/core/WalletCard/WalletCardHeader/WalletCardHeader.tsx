import { translate } from "locale";
import { Row } from "react-native-components";
import { WalletCardTitle, CopyIcon, EditIcon } from "../WalletCard.styles";
import useWallet from "module/wallet/hook/useWallet";

interface AccountCardHeaderProps {
    index: number;
    name: string;
}

const WalletCardHeader = ({ index, name }: AccountCardHeaderProps): JSX.Element => {
    const { serviceInstance } = useWallet(index);
    return (
        <Row justifyContent="space-between" alignItems="center">
            <EditIcon index={index} />
            <WalletCardTitle variant="h3">{name}</WalletCardTitle>
            <CopyIcon text={serviceInstance?.getAddress() || ""} toastMessage={translate("address_copied")} />
        </Row>
    );
};

export default WalletCardHeader;
