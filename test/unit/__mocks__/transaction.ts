import { Transaction, TransactionStatus, TransactionType } from "@peersyst/ckb-peersyst-sdk";

export const transaction: Transaction = {
    status: TransactionStatus.COMMITTED,
    transactionHash: "0x1234567890abcdef",
    inputs: [],
    outputs: [],
    blockHash: "0x1234567890abcdef",
    blockNumber: 1,
    amount: 1000,
    type: TransactionType.RECEIVE_CKB,
    timestamp: new Date(2022, 0, 29),
};

export const transactions = [...Array(3)].map((_, i) => ({
    status: TransactionStatus.COMMITTED,
    transactionHash: "0x1234567890abcde" + i,
    inputs: [],
    outputs: [],
    blockHash: "0x1234567890abcde" + i,
    blockNumber: i,
    amount: 1000,
    type: TransactionType.RECEIVE_CKB,
    timestamp: new Date(2022, 0, i + 1),
}));
