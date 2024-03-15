/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SimpleSignInRequestDto = {
    id: number;
    signInToken: string;
    status: 'pending' | 'signed' | 'declined' | 'request_expired' | 'session_expired';
    createdAt: string;
    expiresAt: string;
    sessionExpiresAt: string;
};

