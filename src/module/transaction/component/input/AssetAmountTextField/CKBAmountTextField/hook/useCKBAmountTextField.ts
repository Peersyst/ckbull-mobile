import { TextFieldProps } from "@peersyst/react-native-components";
import { config } from "config";
import { useTranslate } from "module/common/hook/useTranslate";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import { getDecimals } from "module/common/utils/BalanceOperations/utils/getDecimals";
import settingsState from "module/settings/state/SettingsState";
import { useFormatBalance } from "module/wallet/component/display/Balance/hook/useFormatBalance";
import useGetBalance from "module/wallet/query/useGetBalance";
import { useRecoilValue } from "recoil";

export interface UseCKBAmountTextFieldParams {
    maxAmount?: string | number;
    minAmount?: string | number;
    walletIndex?: number;
    fee?: string | number;
}

export interface UseCKBAmountTextFieldResult {
    validators: TextFieldProps["validators"];
}

function getMaxAmount(maxAmount: string | number | undefined, freeBalance: string | number, fee: string | number): string {
    if (maxAmount) return maxAmount.toString();
    if (BalanceOperations.gt(freeBalance, fee)) {
        return BalanceOperations.minus(freeBalance, fee);
    }
    return freeBalance.toString();
}

export function useCKBAmountTextField({
    maxAmount: maxAmountParam,
    minAmount = config.minimumTransactionAmount,
    walletIndex,
}: UseCKBAmountTextFieldParams): UseCKBAmountTextFieldResult {
    const formatBalance = useFormatBalance();
    const translateError = useTranslate("error");

    const { fee } = useRecoilValue(settingsState);
    const { data: { freeBalance = 0 } = {} } = useGetBalance(walletIndex);

    const maxAmount = getMaxAmount(maxAmountParam, freeBalance, BNToNumber(fee));
    const maxAmountDecimals = getDecimals(maxAmount);

    return {
        validators: {
            maxAmount: [
                {
                    maxAmount,
                },
                translateError("invalid_number_lte", {
                    n: formatBalance(maxAmount, {
                        units: config.tokenName,
                        numberFormatOptions: {
                            minimumFractionDigits: maxAmountDecimals,
                            maximumFractionDigits: maxAmountDecimals,
                        },
                    }),
                }),
            ],
            minAmount: [
                {
                    minAmount,
                },
                translateError("invalid_number_gte", { n: formatBalance(minAmount, { units: config.tokenName }) }),
            ],
            minAmountFromDecimals: [
                {
                    decimals: config.defaultDecimals,
                },
                translateError("invalid_number_gte", { n: formatBalance(1, { units: config.miniUnits }) }),
            ],
        },
    };
}
