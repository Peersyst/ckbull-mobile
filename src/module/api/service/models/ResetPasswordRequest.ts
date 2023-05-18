/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordRequest = {
    /**
     * at least 8 characters long, 1 uppercase & 1 lowercase letter, 1 number, 1 special character
     */
    password: string;
    token: string;
};
