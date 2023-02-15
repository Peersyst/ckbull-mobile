import { TextFieldProps } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import { getDecimals } from "module/common/utils/BalanceOperations/utils/getDecimals";
import { useFormatBalance } from "module/wallet/component/display/Balance/hook/useFormatBalance";

export interface UseTokenAmountTextFieldParams {
    maxAmount: number | string | bigint; //in big int version
    minAmount?: number | string | bigint; //in big int version
    decimals: number | string;
    tokenName: string;
}

export interface UseTokenAmountTextFieldResult {
    validators: TextFieldProps["validators"];
}

export function useTokenAmountTextField({
    maxAmount: maxAmountParam,
    minAmount: minAmountParam = 1,
    decimals,
    tokenName,
}: UseTokenAmountTextFieldParams): UseTokenAmountTextFieldResult {
    const formatBalance = useFormatBalance();
    const translateError = useTranslate("error");

    const minAmount = BNToNumber(minAmountParam.toString(), decimals);
    const maxAmount = BNToNumber(maxAmountParam.toString(), decimals);
    const finalDecimals = getDecimals(maxAmount);

    return {
        validators: {
            maxAmount: [
                {
                    maxAmount,
                    decimals,
                },
                translateError("invalid_number_lte", {
                    n: formatBalance(maxAmount, {
                        units: tokenName,
                        numberFormatOptions: {
                            minimumFractionDigits: finalDecimals,
                            maximumFractionDigits: finalDecimals,
                        },
                    }),
                }),
            ],

            minAmount: [
                {
                    minAmount,
                    decimals,
                },
                translateError("invalid_number_gte", { n: formatBalance(minAmount, { units: tokenName }) }),
            ],

            minAmountFromDecimals: [
                {
                    decimals,
                },
                translateError("invalid_number_gte", { n: formatBalance(1, { units: tokenName }) }),
            ],
        },
    };
}
