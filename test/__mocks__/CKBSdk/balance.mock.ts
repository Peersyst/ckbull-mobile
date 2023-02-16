import { CKBBalance } from "ckb-peersyst-sdk";
import BaseMock from "mocks/common/base.mock";

export class BalanceMock extends BaseMock implements CKBBalance {
    totalBalance: number;
    occupiedBalance: number;
    freeBalance: number;
    constructor({ totalBalance, occupiedBalance, freeBalance }: Partial<CKBBalance> = {}) {
        super();
        this.totalBalance = totalBalance || 100;
        this.occupiedBalance = occupiedBalance || 50;
        this.freeBalance = freeBalance || 50;
    }
}
