import { CompleteTransactionRequestDto } from "module/api/service";

export interface ParsedPendingTransactions {
    title: string;
    data: CompleteTransactionRequestDto[];
}

export enum TransactionRequestStatus {
    PENDING = "pending",
    SIGNED = "signed",
    DECLINED = "declined",
    EXPIRED = "expired",
}
