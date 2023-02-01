import { DialogProps, useDialog } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";

interface UseCancelableDialogReturn {
    showCancelableDialog: (props: DialogProps) => void;
}

export default function (): UseCancelableDialogReturn {
    const { showDialog } = useDialog();
    const translate = useTranslate();

    const showCancelableDialog = ({ buttons, ...rest }: DialogProps) => {
        const cancelableButtons = buttons;
        cancelableButtons?.push({ type: "positive", text: translate("cancel"), variant: "text" });

        showDialog({
            ...rest,
            buttons: cancelableButtons,
        });
    };
    return { showCancelableDialog };
}