import { Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import { AddWalletRoot } from "./AddWallet.styles";

const AddWallet = (): JSX.Element => {
    const translate = useTranslate();

    return (
        <AddWalletRoot flex={1} gap="3%" alignItems="center">
            <Typography variant="body3Regular">{translate("how_add_account")}</Typography>
            <Typography variant="body3Light" light textAlign="center">
                {translate("can_add_account")}
            </Typography>
        </AddWalletRoot>
    );
};

export default AddWallet;
