import BaseMock from "mocks/common/base.mock";
import {
    TransactionRequestStatusType,
    TransactionRequestType,
} from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { Transaction, TransactionType } from "module/sdk";
import { App } from "module/activity/core/ActivityCard/ActivityCard.types";

export class TransactionRequestMock extends BaseMock implements TransactionRequestType {
    transaction: Pick<Transaction, "type" | "amount">;
    transactionToken: string;
    status: TransactionRequestStatusType;
    expiresAt?: number;
    app?: App;
    constructor({ transaction, transactionToken, status, expiresAt, app }: Partial<TransactionRequestType>) {
        super();
        this.transaction = transaction || { type: TransactionType.RECEIVE_TOKEN, amount: 1000 };
        this.transactionToken = transactionToken || "0";
        this.status = status || "signed";
        this.expiresAt = expiresAt || 1000;
        this.app = app || { title: "App" };
    }
}
