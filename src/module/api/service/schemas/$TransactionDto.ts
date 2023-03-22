/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionDto = {
    properties: {
        transactionHash: {
            type: 'string',
            isRequired: true,
        },
        amount: {
            type: 'number',
            isRequired: true,
        },
        status: {
            type: 'Enum',
        },
        to: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;