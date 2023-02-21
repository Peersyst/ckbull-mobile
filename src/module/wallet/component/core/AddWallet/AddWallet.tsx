import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import { AddWalletRoot } from "./AddWallet.styles";

const AddWallet = (): JSX.Element => {
    const translate = useTranslate();

    return (
        <AddWalletRoot flex={1} gap="14%" alignItems="center">
            <Col gap="4%" alignItems="center">
                <Typography variant="body2Strong">{translate("how_add_account")}</Typography>
                <Typography variant="body2Light">{translate("can_add_account")}</Typography>
            </Col>
        </AddWalletRoot>
    );
};

export default AddWallet;
