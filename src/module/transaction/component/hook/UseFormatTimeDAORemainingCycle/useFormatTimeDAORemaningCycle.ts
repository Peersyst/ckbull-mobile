import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";

function useFormatTimeDAORemainingCycle() {
    const translate = useTranslate();
    const formatTimeDAORemainingCycle = ({ remainingEpochs }: DAOUnlockableAmount): string => {
        return `${remainingEpochs} ${translate("epochs")}`;
    };
    return formatTimeDAORemainingCycle;
}

export default useFormatTimeDAORemainingCycle;
