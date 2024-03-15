/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GenerateNativeTokenTransactionSkeleton = {
    properties: {
        amount: {
            type: 'string',
            description: `The amount to send`,
            isRequired: true,
        },
        to: {
            type: 'string',
            description: `The address of the sender`,
            isRequired: true,
        },
    },
} as const;
