import { useSettings } from "module/settings/hook/useSettings";
import { FiatCurrencyType } from "module/settings/state/SettingsState";
import { useGetCkbPrice } from "../query/useGetCkbPrice";
import { BalanceOperations } from "../utils/BalanceOperations/BalanceOperations";

export default function useCkbConversion(balance?: string, currency?: FiatCurrencyType) {
    const { fiat } = useSettings();
    const { data = 0 } = useGetCkbPrice(currency || fiat);
    function convertBalance(balance: string): string {
        return BalanceOperations.mul(balance, data);
    }
    return { value: convertBalance(balance || "0"), convertBalance };
}
