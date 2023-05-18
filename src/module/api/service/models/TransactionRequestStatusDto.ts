/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionRequestStatusDto = {
    transactionToken: string;
    status: 'pending' | 'signed' | 'expired' | 'declined';
};
