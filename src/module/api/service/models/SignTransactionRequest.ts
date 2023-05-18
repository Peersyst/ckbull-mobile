/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignTransactionRequest = {
    /**
     * The signInToken of the signInRequest that made the transactionRequest
     */
    signInToken: string;
    /**
     * The transaction to sign
     */
    transaction: any;
};
