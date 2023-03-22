/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInRequestStatusDto = {
    signInToken: string;
    status: 'pending' | 'signed' | 'declined' | 'request_expired' | 'session_expired';
};

