import { Transaction } from "module/sdk";
import { App } from "module/activity/core/ActivityCard/ActivityCard.types";

export type TransactionRequestStatusType = "pending" | "signed" | "expired";

export type TransactionRequestType = {
    transactionToken: string;
    status: TransactionRequestStatusType;
    transaction: Pick<Transaction, "type" | "amount">;
    expiresAt?: number;
    app?: App;
};

export interface TransactionRequestRootProps {
    status: TransactionRequestStatusType;
}
