/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateDappRequest = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
            maximum: 32,
            minimum: 4,
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
        termsUrl: {
            type: 'string',
        },
        privacyPolicyUrl: {
            type: 'string',
        },
        image: {
            type: 'string',
        },
    },
} as const;
