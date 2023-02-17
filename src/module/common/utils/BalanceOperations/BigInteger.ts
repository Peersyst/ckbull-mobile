//eslint-disable-next-line @typescript-eslint/no-var-requires
const BN = require("big-integer");

export class BigInteger {
    static eq(a: string, b: string): boolean {
        return BN(a).equals(b);
    }

    static gt(a: string, b: string): boolean {
        return BN(a).greater(b);
    }

    static gte(a: string, b: string): boolean {
        return BN(a).greaterOrEquals(b);
    }

    static exp(a: string, b: string): string {
        return BN(a).pow(b).toString();
    }

    static mul(a: string, b: string): string {
        return BN(a).times(b).toString();
    }

    static minus(a: string, b: string): string {
        return BN(a).subtract(b).toString();
    }

    static add(a: string, b: string): string {
        return BN(a).add(b).toString();
    }

    static div(a: string, b: string): string {
        return BN(a).divide(b).toString();
    }
}
