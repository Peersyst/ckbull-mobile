import { BigInteger } from "../BigInteger";
import { removeTrailingZeros, removeLeftZeros } from "./BalanceOperations.utils";
import { stringifyNumber } from "./stringifyNumber";

/**
 * @param number Number to convert to BN. It should have a dot as a separator.
 * It should not have grouping separators. (1000000.3 instead of 1.000.000,3 or 1000000,3)
 * @returns
 * Example: 1 with 3 decimals will be 1000 in BN.
 * Example: 0.001 with 3 decimals will be 1 in BN.
 */
export function numberToBN(number: string | number, supportedDecimalsParam: number | string): string {
    const [integer, decimals] = stringifyNumber(number).split(".");
    const supportedDecimals = parseInt(supportedDecimalsParam.toString(), 10);
    if (decimals) {
        //Convert 0.00100 to 0.001
        const cleanedDecimals = removeTrailingZeros(decimals);
        /**
         * The finalNumberDecimals is the number of decimals that will be used to convert the number to BN.
         * If the number has more decimals than the supportedDecimals, we will use the supportedDecimals.
         */
        const finalNumberOfDecimals = Math.min(cleanedDecimals.length, supportedDecimals);
        const finalDecimalPart = cleanedDecimals.slice(0, finalNumberOfDecimals);
        const zerosToBeAdded = supportedDecimals - finalDecimalPart.length;

        /**
         * We need to add zeros to the end of the number to convert it to BN correctly.
         */
        const tempAmount = `${integer}${finalDecimalPart}`;
        const factor = BigInteger.exp("10", zerosToBeAdded.toString());
        const res = removeLeftZeros(BigInteger.mul(tempAmount, factor));
        if (res === "") return "0";
        else return res;
    } else {
        const factor = BigInteger.exp("10", supportedDecimals.toString());
        return BigInteger.mul(integer, factor);
    }
}
