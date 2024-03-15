/* generated using openapi-typescript-codegen -- do no edit */
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
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
    },
} as const;
