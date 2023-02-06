import { Transaction } from "module/sdk";

export type AppDto = {
    title: string;
    imageUrl?: string;
};

export type ConnectedSiteDto = {
    app: AppDto;
    status: "pending" | "connected" | "failed";
};

export type TransactionRequestDto = {
    transactionToken: string;
    status: "pending" | "signed" | "expired";
    transaction: Pick<Transaction, "type" | "amount">; // Pending to read Nervos documentation & Add inputs & outputs
    createdAt: number;
    expiresAt: number;
    app?: AppDto;
    token?: string;
};
