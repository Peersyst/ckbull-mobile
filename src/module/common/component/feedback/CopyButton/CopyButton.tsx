import { capitalize } from "@peersyst/react-utils";
import { CheckIcon, CopyIcon } from "icons";
import { useTranslate } from "module/common/hook/useTranslate";
import { useState } from "react";
import Button from "../../input/Button/Button";
import { ButtonProps } from "../../input/Button/Button.types";
import { useCopyToClipboard } from "@peersyst/react-native-components";

export interface CopyButtonProps extends Omit<ButtonProps, "children" | "leftIcon" | "onPress" | "loading"> {
    copyText: string;
    showToast?: boolean;
    toastMessage?: string;
}

export default function CopyButton({ copyText, showToast: toast = false, toastMessage, ...buttonProps }: CopyButtonProps): JSX.Element {
    const translate = useTranslate();

    const copyToClipboard = useCopyToClipboard();

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        copyToClipboard({ text: copyText, showToastOnCopy: toast, toastMessage });
        setCopied(true);
    };

    return (
        <Button leftIcon={copied ? <CheckIcon /> : <CopyIcon />} onPress={handleCopy} {...buttonProps}>
            {copied ? capitalize(translate("copied")) : capitalize(translate("copy"))}
        </Button>
    );
}
