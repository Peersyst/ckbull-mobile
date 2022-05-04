import { isUnlockDAO } from "module/dao/utils/isUnlockDAO";
import { TransactionType } from "module/transaction/types";

describe("isUnlockDAO tests", () => {
    test("Returns true if the type is from a DAO unlock tx", () => {
        expect(isUnlockDAO(TransactionType.UNLOCK_DAO)).toEqual(true);
    });

    test("Returns false if the type is not from a DAO unlock tx", () => {
        expect(isUnlockDAO(TransactionType.RECEIVE_CKB)).toEqual(false);
        expect(isUnlockDAO(TransactionType.WITHDRAW_DAO)).toEqual(false);
    });
});
