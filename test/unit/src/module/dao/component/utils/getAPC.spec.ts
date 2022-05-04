import { DAOBalance } from "module/common/service/mock/CkbServiceMock.types";
import { getAPC } from "module/dao/utils/getAPC";

describe("getAPC tests", () => {
    test("No apc", () => {
        const daoBalance: DAOBalance = {
            daoDeposit: BigInt(0),
            daoCompensation: BigInt(0),
        };
        expect(getAPC(daoBalance)).toEqual(0);
    });
    test("Get the correct APC", () => {
        const daoBalance: DAOBalance = {
            daoDeposit: BigInt(100),
            daoCompensation: BigInt(30),
        };
        expect(getAPC(daoBalance)).toEqual(30);
    });
});
