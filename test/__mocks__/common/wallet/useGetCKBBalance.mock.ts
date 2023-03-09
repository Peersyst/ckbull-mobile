import { BalanceMock } from "mocks/CKBSdk";

import BaseMock from "../base.mock";
import { UseServiceInstanceMock } from "./useServiceInstance.mock";

export class UseGetCKBBalanceMock extends BaseMock {
    balance: BalanceMock;
    constructor(balanceParams: Partial<BalanceMock> = {}) {
        const { serviceInstance } = new UseServiceInstanceMock();
        super();
        this.balance = new BalanceMock(balanceParams);
        this.mock = jest.spyOn(serviceInstance, "getCKBBalance").mockReturnValue(this.balance);
    }
}
