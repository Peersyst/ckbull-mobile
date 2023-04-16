/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        email: {
            type: 'string',
            isRequired: true,
        },
        type: {
            properties: {
            },
            isRequired: true,
        },
        googleAuth: {
            type: 'boolean',
            isRequired: true,
        },
    },
} as const;