import { AddWalletCardRoot } from "./AddWalletCard.style";
import { useTranslate } from "module/common/hook/useTranslate";
import Button from "module/common/component/input/Button/Button";
import { Row, Typography, useModal } from "@peersyst/react-native-components";
import CreateWalletModal from "../../core/CreateWalletModal/CreateWalletModal";
import ImportWalletModal from "../../core/ImportWalletModal/ImportWalletModal";

const AddWalletCard = (): JSX.Element => {
    const translate = useTranslate();
    const { showModal } = useModal();
    return (
        <AddWalletCardRoot justifyContent="center" gap="5%" alignItems="center">
            <Typography variant="body3Regular" color="gray.0">
                {translate("add_a_new_account")}
            </Typography>
            <Row justifyContent="center" gap={"5%"} style={{ width: "100%" }}>
                <Button variant="outlined" color="gray.0" onPress={() => showModal(CreateWalletModal)}>
                    {translate("create")}
                </Button>
                <Button variant="secondary" size="lg" onPress={() => showModal(ImportWalletModal)}>
                    {translate("import")}
                </Button>
            </Row>
        </AddWalletCardRoot>
    );
};

export default AddWalletCard;
