import { DialogProps, useDialog } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";

interface UseCancelableDialogReturn {
    showCancelableDialog: (props: DialogProps) => void;
    hideDialog: () => void;
    isDialogOpen: () => boolean;
}

export default function (): UseCancelableDialogReturn {
    const { showDialog, ...restDialog } = useDialog();
    const translate = useTranslate();

    const showCancelableDialog = ({ buttons, ...rest }: DialogProps) => {
        const cancelableButtons = buttons;
        cancelableButtons?.push({ type: "default", text: translate("cancel"), variant: "text" });

        showDialog({
            ...rest,
            buttons: cancelableButtons,
        });
    };
    return { showCancelableDialog, ...restDialog };
}
