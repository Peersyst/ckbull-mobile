/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecoverPasswordRequest = {
    properties: {
        email: {
            type: 'string',
            isRequired: true,
            format: 'email',
        },
    },
} as const;