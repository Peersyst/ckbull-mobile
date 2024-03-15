/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SignedSignInRequest = {
    properties: {
        metadata: {
            type: 'all-of',
            description: `The signIn token`,
            contains: [{
                type: 'AccountMetadataDto',
            }],
            isRequired: true,
        },
    },
} as const;
