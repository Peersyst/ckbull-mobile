/**
 * @param amount Amount to remove unused rigth zeros
 * @returns 0400 becomes 04, 0.400 becomes 0.4, 0.4000 becomes 0.4
 */
export const removeTrailingZeros = (amount: string): string => amount.replace(/\.?0*$/, "");

/**
 * @param amount Amount to remove unused left zeros
 * @returns 0400 becomes 400
 */
export const removeLeftZeros = (amount: string): string => amount.replace(/^0+/, "");

export function joinNumber(integer: string, fraction: string, isNegative: boolean): string {
    const prefix = isNegative ? "-" : "";
    if (integer === "" && fraction === "") return "0";
    if (integer === "") {
        return `${prefix + "0"}.${fraction}`;
    }
    if (fraction === "") {
        return `${prefix + integer}`;
    }

    return `${prefix + integer}.${fraction}`;
}

export const splitInteger = (amount: string, numberOfDecimals: number): [string, string] => {
    // get the integer part of value by counting number of zeros from start
    // 13456789 -> '13'
    // 001234 -> ''
    const integer = amount.slice(0, -numberOfDecimals);

    // get the fraction part of value by counting number of zeros backward
    // 13456789 -> '456789'
    // 001234 -> '001234'
    const fraction = amount.slice(-numberOfDecimals).replace(/\.?0+$/, "");

    return [integer, fraction];
};
