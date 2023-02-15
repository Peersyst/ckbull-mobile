import { config } from "config";
import { BalanceOperations } from "../BalanceOperations";
import { joinNumber, splitInteger } from "./BalanceOperations.utils";
import { stringifyNumber } from "./stringifyNumber";

/**
 * @returns Return number version of the bigint
 */
export function BNToNumber(amount: string | number, decimals: string | number = config.defaultDecimals): string {
    const unsignedAmount = stringifyNumber(amount.toString().replace(/-|,/g, ""));
    const isNegative = amount.toString()[0] === "-";
    const numberOfDecimals = Number(decimals);

    if (numberOfDecimals <= 0) {
        return joinNumber(unsignedAmount, "", isNegative);
    }

    if (BalanceOperations.eq(unsignedAmount, "0", numberOfDecimals.toString())) return "0";

    const finalAmount = unsignedAmount.padStart(numberOfDecimals, "0");

    const [integer, fraction] = splitInteger(finalAmount, numberOfDecimals);

    return joinNumber(integer, fraction, isNegative);
}
