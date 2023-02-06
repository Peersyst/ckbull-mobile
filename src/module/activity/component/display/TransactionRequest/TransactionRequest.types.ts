import { Transaction } from "module/sdk";
import { App } from "module/activity/core/ActivityCard/ActivityCard.types";

export type TransactionRequestStatusType = "pending" | "signed" | "expired";

export type TransactionRequestType = {
    transactionToken: string;
    status: TransactionRequestStatusType;
    transaction: Pick<Transaction, "type" | "amount">; //Add inputs & outputs
    expiresAt?: number;
    app?: App;
    token?: string;
};

export interface TransactionRequestRootProps {
    status: TransactionRequestStatusType;
}
