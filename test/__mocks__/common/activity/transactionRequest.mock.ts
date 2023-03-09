import BaseMock from "mocks/common/base.mock";
import { AppDto, TransactionRequestDto } from "module/activity/dto/dtos";
import { TransactionType } from "module/sdk";
import { AppMock } from "mocks/common";

export class TransactionRequestMock extends BaseMock implements TransactionRequestDto {
    transaction: TransactionRequestDto["transaction"];
    transactionToken: string;
    status: TransactionRequestDto["status"];
    expiresAt: number;
    createdAt: number;
    app?: AppDto;
    constructor({ transaction, transactionToken, status, createdAt, expiresAt, app }: Partial<TransactionRequestDto>) {
        super();
        this.transaction = transaction || { type: TransactionType.RECEIVE_TOKEN, amount: 1000 };
        this.transactionToken = transactionToken || "0";
        this.status = status || "signed";
        this.expiresAt = expiresAt || 1000;
        this.createdAt = createdAt || 0;
        this.app = app || new AppMock();
    }
}
