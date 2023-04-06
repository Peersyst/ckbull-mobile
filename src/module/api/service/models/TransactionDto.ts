/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionDto = {
    transactionHash: string;
    amount: number;
    status?: 'pending' | 'proposed' | 'committed' | 'rejected';
    to: string;
};
