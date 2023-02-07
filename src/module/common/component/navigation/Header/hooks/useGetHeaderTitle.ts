import { useTranslate } from "module/common/hook/useTranslate";
import { MainStackParamsList } from "stack-navigator";

export default function (routeName: keyof MainStackParamsList): string {
    const translate = useTranslate();

    switch (routeName) {
        case "Settings":
            return translate("settings");
        case "DAO":
            return translate("nervosDAO");
        case "News":
            return translate("news");
        case "Activity":
            return translate("activity");
        default:
            return translate("ckbullMobileWallet");
    }
}
