import { AddWalletCardRoot } from "./AddWalletCard.style";
import { useTranslate } from "module/common/hook/useTranslate";
import Button from "module/common/component/input/Button/Button";
import { Row } from "@peersyst/react-native-components";

const AddWalletCard = (): JSX.Element => {
    const translate = useTranslate();

    return (
        <AddWalletCardRoot justifyContent="center" gap="5%">
            <Row justifyContent="center" gap={"5%"} style={{ width: "100%" }}>
                <Button variant="outlined">{translate("create")}</Button>
                <Button variant="secondary" size="lg">
                    {translate("import")}
                </Button>
            </Row>
        </AddWalletCardRoot>
    );
};

export default AddWalletCard;
