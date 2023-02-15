import { config } from "config";
import { BigInteger } from "./BigInteger";
import { BNToNumber } from "./utils/BNtoNumber";
import { numberToBN } from "./utils/numberToBN";

export class BalanceOperations {
    static numbersToBN(a: string | number, b: string | number, decimals: string | number): { aBN: string; bBN: string } {
        const aBN = numberToBN(a, decimals);
        const bBN = numberToBN(b, decimals);
        return { aBN, bBN };
    }
    static gt(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): boolean {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a.toString(), b, decimals);
        return BigInteger.gt(aBN, bBN);
    }

    static gte(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): boolean {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a, b, decimals);
        return BigInteger.gte(aBN, bBN);
    }

    static eq(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): boolean {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a, b, decimals);
        return BigInteger.eq(aBN, bBN);
    }

    static minus(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): string {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a, b, decimals);
        return BNToNumber(BigInteger.minus(aBN, bBN), decimals);
    }

    static mul(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): string {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a, b, decimals);
        return BNToNumber(BigInteger.mul(aBN, bBN), decimals);
    }

    static add(a: string | number, b: string | number, decimals: string | number = config.defaultDecimals): string {
        const { aBN, bBN } = BalanceOperations.numbersToBN(a, b, decimals);
        return BNToNumber(BigInteger.add(aBN, bBN), decimals);
    }
}
