/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SignTransactionRequest = {
    properties: {
        signInToken: {
            type: 'string',
            description: `The signInToken of the signInRequest that made the transactionRequest`,
            isRequired: true,
        },
        transaction: {
            type: 'all-of',
            description: `The transaction to sign`,
            contains: [{
                type: 'TransactionDto',
            }],
            isRequired: true,
        },
        signedTransaction: {
            type: 'string',
            description: `The signature of the transaction`,
            isRequired: true,
        },
    },
} as const;