import { TypographyProps } from "@peersyst/react-native-components";
import { FiatCurrencyType } from "module/settings/state/SettingsState";

export type AppCurrency = FiatCurrencyType | "token";

export type BalanceAction = "display" | "add" | "round";

export interface BalanceProps extends Omit<TypographyProps, "children" | "numberOfLines"> {
    balance: bigint | number | string;
    units?: AppCurrency | string;
    unitsPosition?: "left" | "right";
    action?: BalanceAction;
    options?: Intl.NumberFormatOptions;
    loading?: boolean;
}
