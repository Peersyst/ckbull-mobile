import { useToast } from "@peersyst/react-native-components";
import * as Clipboard from "expo-clipboard";
import { useTranslate } from "module/common/hook/useTranslate";

export interface UseCopyToClipboardOptions {
    toastMessage?: string;
}

export default function (): (text: string, options?: UseCopyToClipboardOptions) => void {
    const translate = useTranslate();
    const { showToast } = useToast();

    return (text: string, options: UseCopyToClipboardOptions = {}) => {
        const { toastMessage = translate("copied_to_clipboard") } = options;

        Clipboard.setStringAsync(text)
            .then(() => showToast(toastMessage, { type: "success" }))
            .catch(() => undefined);
    };
}
