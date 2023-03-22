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
            type: 'all-of',
            description: `The transaction request content`,
            contains: [{
                type: 'CreateTransactionDto',
            }],
            isRequired: true,
        },
    },
} as const;