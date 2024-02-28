/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompleteDAppDto = {
    properties: {
        apiSecret: {
            type: 'string',
            isRequired: true,
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        email: {
            type: 'string',
            isRequired: true,
        },
        projectUrl: {
            type: 'string',
            isRequired: true,
        },
        supportUrl: {
            type: 'string',
            isRequired: true,
        },
        apiKey: {
            type: 'string',
            isRequired: true,
        },
        termsUrl: {
            type: 'string',
        },
        privacyPolicyUrl: {
            type: 'string',
        },
        image: {
            type: 'string',
        },
        createdAt: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
    },
} as const;
