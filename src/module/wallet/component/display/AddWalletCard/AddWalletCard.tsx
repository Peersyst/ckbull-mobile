import { AddWalletCardRoot, ContentRoot } from "./AddWalletCard.style";
import useCreateWallet from "module/wallet/hook/useCreateWallet";
import { useTheme } from "@peersyst/react-native-styled";
import { useTranslate } from "module/common/hook/useTranslate";
import Button from "module/common/component/input/Button/Button";

const AddWalletCard = (): JSX.Element => {
    const translate = useTranslate();

    const {
        state: { colorIndex },
    } = useCreateWallet();
    const {
        palette: { wallet: walletColors },
    } = useTheme();

    return (
        <AddWalletCardRoot style={colorIndex !== undefined ? { backgroundColor: walletColors[colorIndex] } : undefined}>
            <ContentRoot style={{ alignContent: "center" }}>
                <Button variant="outlined">{translate("create")}</Button>
                <Button variant="secondary" size="lg">
                    {translate("import")}
                </Button>
            </ContentRoot>
        </AddWalletCardRoot>
    );
};

export default AddWalletCard;
