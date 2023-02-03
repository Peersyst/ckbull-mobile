import { Row, useModal } from "@peersyst/react-native-components";
import { CopyIcon, EditIcon, ReceiveIcon, SendIcon } from "icons";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import EditWalletModal from "module/wallet/component/core/EditWalletModal/EditWalletModal";
import IconButton from "module/common/component/input/IconButton/IconButton";
import useCopyAddressToClipboard from "module/wallet/hook/useCopyAddressToClipboard";

const AccountCardButtons = (): JSX.Element => {
    const { showModal } = useModal();
    const copyAddressToClipboard = useCopyAddressToClipboard();

    return (
        <Row justifyContent="space-between">
            <Row gap={12}>
                <IconButton icon={<CopyIcon />} size="md" variant="outlined" onPress={copyAddressToClipboard} />
                <IconButton icon={<EditIcon />} size="md" variant="outlined" onPress={() => showModal(EditWalletModal)} />
            </Row>
            <Row justifyContent="flex-end" gap={12}>
                <IconButton icon={<SendIcon />} size="md" variant="outlined" onPress={() => showModal(SendModal)} />
                <IconButton icon={<ReceiveIcon />} size="md" variant="secondary" onPress={() => showModal(ReceiveModal)} />
            </Row>
        </Row>
    );
};

export default AccountCardButtons;
