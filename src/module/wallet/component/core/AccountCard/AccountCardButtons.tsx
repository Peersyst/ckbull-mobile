import { Row, useModal } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { MoreIcon, ReceiveIcon, SendIcon } from "icons";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import EditWalletModal from "module/wallet/component/core/EditWalletModal/EditWalletModal";

const AccountCardButtons = (): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="space-between">
            <Button size="md" variant="outlined" onPress={() => showModal(EditWalletModal)} circular>
                <MoreIcon style={{ fontSize: 24 }} />
            </Button>
            <Row justifyContent="flex-end" gap={12}>
                <Button size="md" variant="outlined" onPress={() => showModal(SendModal)} circular>
                    <SendIcon style={{ fontSize: 24 }} />
                </Button>
                <Button size="md" variant="secondary" onPress={() => showModal(ReceiveModal)} circular>
                    <ReceiveIcon style={{ fontSize: 24 }} />
                </Button>
            </Row>
        </Row>
    );
};

export default AccountCardButtons;
