import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";

//Create a test for the BNToNumber function in the same file.
describe("BNToNumber", () => {
    describe("Works for positive numbers", () => {
        test("should convert BN to number", () => {
            expect(BNToNumber("1", 24)).toEqual("0.000000000000000000000001");
            expect(BNToNumber("1000", 3)).toEqual("1");
            expect(BNToNumber("1000000", 6)).toEqual("1");
            expect(BNToNumber("1000000", 3)).toEqual("1000");
            expect(BNToNumber("1e10", 3)).toEqual("10000000");
            expect(BNToNumber(1.1234567891e10, 6)).toEqual("11234.567891");
            expect(BNToNumber("0", 6)).toEqual("0");
            expect(BNToNumber("2", 4)).toEqual("0.0002");
            expect(BNToNumber("200", 4)).toEqual("0.02");
            expect(BNToNumber("0", 3)).toEqual("0");
            expect(BNToNumber("98765432109876543210", 20)).toEqual("0.9876543210987654321");
            expect(BNToNumber("98765432109876543210", 25)).toEqual("0.000009876543210987654321");
        });

        test("Works correctly with the MAX_SAFE_INTEGER", () => {
            expect(BNToNumber(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER.toString().length)).toEqual(
                "0." + Number.MAX_SAFE_INTEGER.toString(),
            );
            expect(BNToNumber(Number.MAX_SAFE_INTEGER * 10, Number.MAX_SAFE_INTEGER.toString().length + 1)).toEqual(
                "0." + Number.MAX_SAFE_INTEGER.toString().slice(0, -1),
            );
        });
    });
    describe("Works for negative numbers", () => {
        test("should convert BN to number", () => {
            /*   expect(BNToNumber("-1000", 3)).toEqual("-1"); */
            expect(BNToNumber("-35", 0)).toEqual("-35");
            expect(BNToNumber("-1000000", 6)).toEqual("-1");
            expect(BNToNumber("-1000000", 3)).toEqual("-1000");
            expect(BNToNumber("-1e10", 3)).toEqual("-10000000");
            expect(BNToNumber(-1.1234567891e10, 6)).toEqual("-11234.567891");
            expect(BNToNumber("-0", 6)).toEqual("0");
            expect(BNToNumber("-2", 4)).toEqual("-0.0002");
            expect(BNToNumber("-0", 3)).toEqual("0");
            expect(BNToNumber("-98765432109876543210", 20)).toEqual("-0.9876543210987654321");
            expect(BNToNumber("-98765432109876543210", 25)).toEqual("-0.000009876543210987654321");
        });
    });
});
