import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import { numberToBN } from "module/common/utils/BalanceOperations/utils/numberToBN";

describe("Test for verify BNToNumber and numberToBN works correcly together", () => {
    test("Works with 23", () => {
        expect(BNToNumber(numberToBN("23", 0), 0)).toEqual("23");
        expect(numberToBN(BNToNumber("23", 0), 0)).toEqual("23");
    });

    test("Works with -23", () => {
        expect(BNToNumber(numberToBN("-23", 0), 0)).toEqual("-23");
        expect(numberToBN(BNToNumber("-23", 0), 0)).toEqual("-23");
    });

    test("Works with decimals", () => {
        const decimals = "3";
        const baseNumber = "23.456";
        const bigInNumber = numberToBN(baseNumber, decimals);
        expect(bigInNumber).toEqual("23456");
        expect(BNToNumber(bigInNumber, decimals)).toEqual(baseNumber);
    });

    test("Works with decimals", () => {
        const decimals = "3";
        const baseNumber = "23.456";
        const bigInNumber = numberToBN(baseNumber, decimals);
        expect(bigInNumber).toEqual("23456");
        expect(BNToNumber(bigInNumber, decimals)).toEqual(baseNumber);
    });
});
