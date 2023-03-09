import { numberToBN } from "module/common/utils/BalanceOperations/utils/numberToBN";

describe("numberToBN", () => {
    describe("Works for positive numbers", () => {
        test("should convert number to BN", () => {
            expect(numberToBN("1", 3)).toEqual("1000");
            expect(numberToBN("1", 6)).toEqual("1000000");
            expect(numberToBN("1000", 3)).toEqual("1000000");
            expect(numberToBN(2 * 10 ** -23, 6)).toEqual("0");
            expect(numberToBN("2e-4".toString(), 4)).toEqual("2");
            expect(numberToBN("2e-4".toString(), 3)).toEqual("0");
            expect(numberToBN("1231321421342134.234".toString(), 2)).toEqual("123132142134213423");
            //Rounds down
            expect(numberToBN("1231321421342134.238".toString(), 2)).toEqual("123132142134213423");
        });
    });
    describe("Works for negative numbers", () => {
        test("should convert number to BN", () => {
            expect(numberToBN("-1", 3)).toEqual("-1000");
            expect(numberToBN("-1", 6)).toEqual("-1000000");
            expect(numberToBN("-1000", 3)).toEqual("-1000000");
            expect(numberToBN(-2 * 10 ** -23, 6)).toEqual("0");
            expect(numberToBN("-2e-4".toString(), 4)).toEqual("-2");
            expect(numberToBN("-2e-4".toString(), 3)).toEqual("0");
            expect(numberToBN("-1231321421342134.234".toString(), 2)).toEqual("-123132142134213423");
            //Rounds down
            expect(numberToBN("-1231321421342134.238".toString(), 2)).toEqual("-123132142134213423");
        });
    });
});
