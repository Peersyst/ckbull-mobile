import { TransactionRequestDto } from "./dto/dtos";

export interface ParsedPendingTransactions {
    title: string;
    data: TransactionRequestDto[];
}
