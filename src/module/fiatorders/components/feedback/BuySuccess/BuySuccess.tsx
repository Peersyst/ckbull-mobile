import { useTranslate } from "module/common/hook/useTranslate";
import OrderCompleted from "../OrderCompleted/OrderCompleted";
import { useModal } from "@peersyst/react-native-components";
import BuyModal from "../BuyModal/BuyModal";

export default function BuySuccess(): JSX.Element {
    const translate = useTranslate();
    const { hideModal } = useModal();

    function handleOnClose() {
        hideModal(BuyModal.id);
    }

    return <OrderCompleted title={translate("purchaseCompleted")} onClose={handleOnClose} />;
}
