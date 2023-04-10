import { TransactionDto } from "module/api/service";

export class TransactionDtoMock implements TransactionDto {
    transactionHash: string;
    amount: number;
    status?: "pending" | "proposed" | "committed" | "rejected";
    to: string;

    constructor() {
        this.transactionHash = "";
        this.amount = 0;
        this.status = "pending";
        this.to = "";
    }
}
