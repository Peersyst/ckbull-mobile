import { useFormatNumber } from "module/common/hook/useFormatNumber";
import formatBalance, { FormatBalanceOptions } from "module/wallet/component/display/Balance/utils/formatBalance";

export const useFormatBalance = () => {
    const formatNumber = useFormatNumber();
    const formatBalanceFunction = (
        balance: bigint | number | string,
        { numberFormatOptions, units, unitsPosition, action }: FormatBalanceOptions = {},
    ) => {
        const unsignedBalance = balance.toString().replace("-", "");
        const formattedBalance = formatNumber(unsignedBalance, numberFormatOptions);
        return formatBalance(formattedBalance, { action, units, unitsPosition });
    };

    return formatBalanceFunction;
};
