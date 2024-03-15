import { Row, useConfig, useModal } from "@peersyst/react-native-components";
import { CopyIcon, DatabaseIcon, EditIcon, ReceiveIcon, SendIcon } from "icons";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import EditWalletModal from "module/wallet/component/core/EditWalletModal/EditWalletModal";
import useCopyAddressToClipboard from "module/wallet/hook/useCopyAddressToClipboard";
import ActionIconButton from "module/common/component/input/ActionIconButton/ActionIconButton";
import { useTranslate } from "module/common/hook/useTranslate";
import BuyModal from "module/fiatorders/components/feedback/BuyModal/BuyModal";
import { capitalize } from "@peersyst/react-utils";
import { TransaltionResourceType } from "locale";
import { useSettings } from "module/settings/hook/useSettings";

const AccountCardButtons = (): JSX.Element => {
    const translate = useTranslate();
    const { showModal } = useModal();
    const copyAddressToClipboard = useCopyAddressToClipboard();
    const { network } = useSettings();
    const { enableTransak } = useConfig("transak");

    function getLabel(localeKey: TransaltionResourceType) {
        return capitalize(translate(localeKey));
    }

    return (
        <Row gap={12} justifyContent="center">
            <ActionIconButton label={getLabel("copy")} icon={<CopyIcon />} size="md" action={copyAddressToClipboard} />
            <ActionIconButton label={getLabel("edit")} icon={<EditIcon />} size="md" action={() => showModal(EditWalletModal)} />
            {enableTransak && network === "mainnet" && (
                <ActionIconButton
                    label={getLabel("purchase")}
                    isActive
                    icon={<DatabaseIcon />}
                    size="md"
                    action={() => showModal(BuyModal)}
                />
            )}
            <ActionIconButton label={getLabel("send")} icon={<SendIcon />} size="md" action={() => showModal(SendModal)} />
            <ActionIconButton label={getLabel("receive")} icon={<ReceiveIcon />} size="md" action={() => showModal(ReceiveModal)} />
        </Row>
    );
};

export default AccountCardButtons;
