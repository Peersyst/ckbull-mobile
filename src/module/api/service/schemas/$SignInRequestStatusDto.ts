/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SignInRequestStatusDto = {
    properties: {
        signInToken: {
            type: 'string',
            isRequired: true,
        },
        status: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;