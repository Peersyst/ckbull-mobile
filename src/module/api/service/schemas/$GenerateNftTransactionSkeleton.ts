/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GenerateNftTransactionSkeleton = {
    properties: {
        to: {
            type: 'string',
            description: `The address of the sender`,
            isRequired: true,
        },
        nft: {
            type: 'string',
            description: `The nft to send`,
            isRequired: true,
        },
    },
} as const;
