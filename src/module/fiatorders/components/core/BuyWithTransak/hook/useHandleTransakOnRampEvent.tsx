import { useModal, useSetTab, useToast } from "@peersyst/react-native-components";
import { TransakEvent, TransakEventHandler } from "@peersyst/react-native-transak";
import { useTranslate } from "module/common/hook/useTranslate";
import { FiatOrderModalTabs } from "module/fiatorders/components/feedback/FiatOrderModal/FiatOrderModal.types";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import useInvalidateBalance from "module/wallet/query/useInvalidateBalance";

export default function useHandleTransakOnRampEvent(): TransakEventHandler {
    const { hideModal } = useModal();
    const { showToast } = useToast();
    const setTab = useSetTab();
    const translate = useTranslate("error");
    const invalidateBalance = useInvalidateBalance();

    async function handleTransakOnRampEvent(event: TransakEvent) {
        switch (event) {
            case TransakEvent.ORDER_COMPLETED:
                invalidateBalance();
                setTab(FiatOrderModalTabs.SUCCESS);
                break;
            case TransakEvent.ORDER_FAILED:
                hideModal(ReceiveModal.id);
                showToast(translate("somethingWentWrong"), { type: "error" });
                break;
        }
    }

    return handleTransakOnRampEvent;
}
