/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompleteTransactionRequestDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        transactionToken: {
            type: 'string',
            isRequired: true,
        },
        status: {
            type: 'Enum',
            isRequired: true,
        },
        transaction: {
            type: 'TransactionDto',
            isRequired: true,
        },
        createdAt: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        expiresAt: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        signInRequest: {
            type: 'SignInRequestDto',
            isRequired: true,
        },
    },
} as const;
