import { DAOUnlockableAmount, FeeRate, Nft, Transaction } from "ckb-peersyst-sdk";
import { TokenAmount } from "module/token/types";

export type Chain = "mainnet" | "testnet";

export interface DepositInDAOParams {
    amount: bigint | number;
    mnemonic: string[];
    feeRate?: FeeRate;
}

export interface SendTransactionParams {
    amount: bigint | number | string;
    mnemonic: string[];
    message?: string;
    to: string;
    feeRate?: FeeRate;
}

export interface TransferTokensParams {
    amount: string;
    mnemonic: string[];
    to: string;
    tokenArgs: string;
    feeRate?: FeeRate;
}

export interface TransferNftParams {
    mnemonic: string[];
    to: string;
    nft: Nft;
    feeRate?: FeeRate;
}

export interface WithdrawOrUnlockParams {
    unlockableAmount: DAOUnlockableAmount;
    mnemonic: string[];
}

export interface FullTransaction extends Transaction {
    token?: TokenAmount;
}
