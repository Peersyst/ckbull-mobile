import { NftTokenMock } from "mocks/CKBSdk";
import { UseServiceInstanceMock } from "../wallet";
import BaseMock from "../base.mock";

export class UseGetNftFromPartialTransactionMock extends BaseMock {
    constructor() {
        super();
        const { serviceInstance } = new UseServiceInstanceMock();
        this.mock = jest.spyOn(serviceInstance, "getNftFromPartialTransaction").mockResolvedValueOnce(new NftTokenMock({}));
    }
}
