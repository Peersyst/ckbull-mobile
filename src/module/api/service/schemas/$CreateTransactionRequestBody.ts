/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateTransactionRequestBody = {
    properties: {
        signInToken: {
            type: 'string',
            description: `The signIn token that was used to create the transaction request`,
            isRequired: true,
        },
        transaction: {
            description: `The transaction request content`,
            properties: {
            },
            isRequired: true,
        },
    },
} as const;