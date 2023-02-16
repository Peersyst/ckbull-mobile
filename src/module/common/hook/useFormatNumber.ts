import { useTranslate } from "module/common/hook/useTranslate";

export const useFormatNumber = () => {
    const translate = useTranslate();
    function formatNumber(n: number | string, options?: Intl.NumberFormatOptions) {
        return translate("number", { val: n, ...options });
    }
    return formatNumber;
};
