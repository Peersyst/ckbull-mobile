import { ReceiveIcon, SendIcon } from "icons";
import { Row, useModal } from "@peersyst/react-native-components";
import DepositModal from "../../DepositModal/DepositModal";
import WithdrawModal from "../../WithdrawModal/WithdrawModal";
import Button from "module/common/component/input/Button/Button";

const DAOCardButtons = (): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="flex-end" gap={12}>
            <Button size="md" variant="outlined" onPress={() => showModal(WithdrawModal)} circular>
                <SendIcon style={{ fontSize: 24 }} />
            </Button>
            <Button size="md" variant="secondary" onPress={() => showModal(DepositModal)} circular>
                <ReceiveIcon style={{ fontSize: 24 }} />
            </Button>
        </Row>
    );
};

export default DAOCardButtons;
