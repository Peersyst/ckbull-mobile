/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateTransactionDto = {
    properties: {
        transactionHash: {
            type: 'string',
            isRequired: true,
        },
        amount: {
            type: 'number',
            isRequired: true,
        },
        to: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;