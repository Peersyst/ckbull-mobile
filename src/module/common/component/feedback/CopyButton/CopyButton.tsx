import { capitalize } from "@peersyst/react-utils";
import { CheckIcon, CopyIcon } from "icons";
import { useTranslate } from "module/common/hook/useTranslate";
import { useState } from "react";
import Button from "../../input/Button/Button";
import { ButtonProps } from "../../input/Button/Button.types";
import { useToast } from "@peersyst/react-native-components";
import * as Clipboard from "expo-clipboard";

export interface CopyButtonProps extends Omit<ButtonProps, "children" | "leftIcon" | "onPress" | "loading"> {
    copyText: string;
    showToast?: boolean;
    toastMessage?: string;
}

export default function CopyButton({ copyText, showToast: toast = false, toastMessage, ...buttonProps }: CopyButtonProps): JSX.Element {
    const translate = useTranslate();

    const { showToast } = useToast();

    const [copied, setCopied] = useState(false);
    const [isCopying, setCopying] = useState(false);

    const handleCopy = () => {
        if (toast) showToast(toastMessage, { type: "success" });
        else {
            setCopying(true);
            Clipboard.setStringAsync(copyText).then(() => {
                setCopying(false);
                setCopied(true);
            });
        }
    };

    return (
        <Button leftIcon={copied ? <CheckIcon /> : <CopyIcon />} onPress={handleCopy} loading={isCopying && !copied} {...buttonProps}>
            {copied ? capitalize(translate("copied")) : capitalize(translate("copy"))}
        </Button>
    );
}
