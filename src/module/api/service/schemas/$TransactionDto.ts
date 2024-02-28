/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        transactionHash: {
            type: 'string',
            isRequired: true,
            isNullable: true,
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
