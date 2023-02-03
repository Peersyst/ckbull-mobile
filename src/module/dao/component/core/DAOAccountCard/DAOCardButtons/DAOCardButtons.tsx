import { ReceiveIcon, SendIcon } from "icons";
import { Row, useModal } from "@peersyst/react-native-components";
import DepositModal from "../../DepositModal/DepositModal";
import WithdrawModal from "../../WithdrawModal/WithdrawModal";
import IconButton from "module/common/component/input/IconButton/IconButton";

const DAOCardButtons = (): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="flex-end" gap={12}>
            <IconButton icon={<SendIcon />} size="md" variant="outlined" onPress={() => showModal(DepositModal)} />
            <IconButton icon={<ReceiveIcon />} size="md" variant="secondary" onPress={() => showModal(WithdrawModal)} />
        </Row>
    );
};

export default DAOCardButtons;
