/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionRequestStatusDto = {
    properties: {
        transactionToken: {
            type: 'string',
            isRequired: true,
        },
        status: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;