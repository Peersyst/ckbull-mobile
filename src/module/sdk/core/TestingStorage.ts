import { TransactionWithStatus } from "@ckb-lumos/base";
import { BaseStorageService } from "module/common/service/BaseStorageService";

export interface TestingStorage {
    keysArr: string[];
    addressesArr: string[];
    lumosTxsArr: TransactionWithStatus[][];
}

export const TestingStorage = new (class extends BaseStorageService<undefined, TestingStorage> {
    constructor() {
        super("testing-storage");
    }

    set(value: TestingStorage): Promise<void> {
        return super.set(value);
    }

    get(): Promise<TestingStorage | null> {
        return super.get();
    }
})();
