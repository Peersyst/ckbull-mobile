import { TransactionDto } from "module/api/service";

const mockedTransaction = {
    outputs: [],
};

export class TransactionDtoMock implements TransactionDto {
    transactionHash: string;
    id: number;
    transaction: object;

    constructor() {
        this.transactionHash = "";
        this.id = 0;
        this.transaction = mockedTransaction;
    }
}
