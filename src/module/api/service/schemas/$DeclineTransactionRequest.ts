/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DeclineTransactionRequest = {
    properties: {
        signInToken: {
            type: 'string',
            description: `The signInToken of the signInRequest that made the transactionRequest`,
            isRequired: true,
        },
    },
} as const;