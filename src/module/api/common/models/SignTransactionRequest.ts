/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionDto } from './TransactionDto';

export type SignTransactionRequest = {
    /**
     * The signInToken of the signInRequest that made the transactionRequest
     */
    signInToken: string;
    /**
     * The transaction to sign
     */
    transaction: TransactionDto;
    /**
     * The signature of the transaction
     */
    signedTransaction: string;
};

