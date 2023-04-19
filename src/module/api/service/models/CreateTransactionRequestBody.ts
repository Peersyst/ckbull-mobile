/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionRequestBody = {
    /**
     * The signIn token that was used to create the transaction request
     */
    signInToken: string;
    /**
     * The transaction request content
     */
    transaction: any;
};
