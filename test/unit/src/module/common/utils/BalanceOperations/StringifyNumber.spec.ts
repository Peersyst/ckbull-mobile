import { stringifyNumber } from "module/common/utils/BalanceOperations/utils/stringifyNumber";

describe("StringifyNumber", () => {
    test("should convert number to string (easy path)", () => {
        expect(stringifyNumber(1)).toEqual("1");
        expect(stringifyNumber(10)).toEqual("10");
        expect(stringifyNumber(234)).toEqual("234");
        expect(stringifyNumber(0.0000001)).toEqual("0.0000001");
    });

    test("should convert number to string - negatives", () => {
        expect(stringifyNumber(-1)).toEqual("-1");
        expect(stringifyNumber(-10)).toEqual("-10");
        expect(stringifyNumber(-234)).toEqual("-234");
        expect(stringifyNumber(-0.0000001)).toEqual("-0.0000001");
    });

    test("should convert number to string (cientific notation)", () => {
        expect(stringifyNumber(1.23e2)).toEqual("123");
        expect(stringifyNumber(1.23e4)).toEqual("12300");
        expect(stringifyNumber(2.2334543e4)).toEqual("22334.543");
        expect(stringifyNumber(1.23e23)).toEqual("123".padEnd(24, "0"));
        expect(stringifyNumber(2.134123421342134e24)).toEqual("2134123421342134000000000");
        expect(stringifyNumber(1.0e23)).toEqual("1".padEnd(24, "0"));
    });

    test("should convert number to string (cientific notation with low numbers)", () => {
        expect(stringifyNumber(1.23e-2)).toEqual("0.0123");
        expect(stringifyNumber(1.23e-4)).toEqual("0.000123");
        expect(stringifyNumber(1.23e-6)).toEqual("0.00000123");
        expect(stringifyNumber(1.23e-8)).toEqual("0.0000000123");
        expect(stringifyNumber(1.23e-10)).toEqual("0.000000000123");
        expect(stringifyNumber(1.23e-12)).toEqual("0.00000000000123");
        expect(stringifyNumber(1.23e-14)).toEqual("0.0000000000000123");
        expect(stringifyNumber(1.23e-16)).toEqual("0.000000000000000123");
        expect(stringifyNumber(1.23e-18)).toEqual("0.00000000000000000123");
        expect(stringifyNumber(1.23e-20)).toEqual("0.0000000000000000000123");
        expect(stringifyNumber(1.23e-22)).toEqual("0.000000000000000000000123");
        expect(stringifyNumber(1.23e-24)).toEqual("0.00000000000000000000000123");
        expect(stringifyNumber(1.23e-26)).toEqual("0.0000000000000000000000000123");
        expect(stringifyNumber(1.23e-28)).toEqual("0.000000000000000000000000000123");
        expect(stringifyNumber(1.23e-30)).toEqual("0.00000000000000000000000000000123");
        expect(stringifyNumber(1.23e-32)).toEqual("0.0000000000000000000000000000000123");
    });

    test("should convert number to string (cientific notation with low numbers)", () => {
        expect(stringifyNumber(1.2322e-8)).toEqual("0.000000012322");
    });
});
