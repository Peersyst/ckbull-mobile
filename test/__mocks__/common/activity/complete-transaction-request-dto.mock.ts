import { CompleteTransactionRequestDto } from "module/api/service";
import { SignInRequestDto } from "../../../../src/module/api/service/models/SignInRequestDto";
import { TransactionDto } from "../../../../src/module/api/service/models/TransactionDto";
import { TransactionDtoMock } from "./transaction-dto.mock";
import { SignInRequestDtoMock } from "./sign-in-request-dto.mock";

export class CompleteTransactionRequestDtoMock implements CompleteTransactionRequestDto {
    id: number;
    transactionToken: string;
    status: "pending" | "signed" | "expired" | "declined";
    transaction: TransactionDto;
    createdAt: string;
    expiresAt: string;
    signInRequest: SignInRequestDto;

    constructor({
        id = 1,
        transactionToken = "transactionToken",
        status = "pending",
        transaction = new TransactionDtoMock(),
        createdAt = "1/12/23",
        expiresAt = "1/12/23",
        signInRequest = new SignInRequestDtoMock(),
    }: Partial<CompleteTransactionRequestDto> = {}) {
        this.id = id;
        this.transactionToken = transactionToken;
        this.status = status;
        this.transaction = transaction;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.signInRequest = signInRequest;
    }
}
