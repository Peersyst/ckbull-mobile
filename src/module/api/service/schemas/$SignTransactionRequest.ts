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
            description: `The transaction to sign`,
            properties: {
            },
            isRequired: true,
        },
    },
} as const;