import { Row, useModal } from "@peersyst/react-native-components";
import { MoreIcon, ReceiveIcon, SendIcon } from "icons";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import EditWalletModal from "module/wallet/component/core/EditWalletModal/EditWalletModal";
import IconButton from "module/common/component/input/IconButton/IconButton";

const AccountCardButtons = (): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="space-between">
            <IconButton icon={<MoreIcon />} size="md" variant="outlined" onPress={() => showModal(EditWalletModal)} />
            <Row justifyContent="flex-end" gap={12}>
                <IconButton icon={<SendIcon />} size="md" variant="outlined" onPress={() => showModal(SendModal)} />
                <IconButton icon={<ReceiveIcon />} size="md" variant="secondary" onPress={() => showModal(ReceiveModal)} />
            </Row>
        </Row>
    );
};

export default AccountCardButtons;
