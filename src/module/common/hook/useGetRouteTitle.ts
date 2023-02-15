import { useTranslate } from "module/common/hook/useTranslate";
import { RootStackParamsList } from "stack-navigator";

export default function (routeName: keyof RootStackParamsList): string {
    const translate = useTranslate();

    switch (routeName) {
        case "Settings":
        case "SettingsMenu":
            return translate("settings");
        case "GeneralSettings":
            return translate("general_settings");
        case "SecuritySettings":
            return translate("security_settings");
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
