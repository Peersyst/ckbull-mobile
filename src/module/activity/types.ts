import { CompleteTransactionRequestDto } from "module/api/service";

export interface ParsedPendingTransactions {
    title: string;
    data: CompleteTransactionRequestDto[];
}
