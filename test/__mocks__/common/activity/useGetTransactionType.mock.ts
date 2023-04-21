import { TransactionType } from "ckb-peersyst-sdk";
import BaseMock from "../base.mock";
import { UseServiceInstanceMock } from "../wallet";

export class UseGetTransactionTypeMock extends BaseMock {
    constructor(type: TransactionType) {
        super();
        const { serviceInstance } = new UseServiceInstanceMock();
        this.mock = jest.spyOn(serviceInstance, "getTransactionSkeletonType").mockResolvedValueOnce(type);
    }
}
