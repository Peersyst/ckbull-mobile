/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SignInRequestDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        signInToken: {
            type: 'string',
            isRequired: true,
        },
        status: {
            type: 'Enum',
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
        sessionExpiresAt: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        metadata: {
            type: 'AccountMetadataDto',
            isRequired: true,
        },
        app: {
            type: 'PartialDappDto',
            isRequired: true,
        },
    },
} as const;
