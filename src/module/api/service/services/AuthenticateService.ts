/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthCredentialsDto } from '../models/AuthCredentialsDto';
import type { LoginRequest } from '../models/LoginRequest';
import type { RecoverPasswordRequest } from '../models/RecoverPasswordRequest';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { ValidateEmailRequest } from '../models/ValidateEmailRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticateService {
    /**
     * Authenticate user with email
     * @param requestBody
     * @returns AuthCredentialsDto
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequest,
    ): CancelablePromise<AuthCredentialsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Authenticate user with Google
     * @returns any
     * @throws ApiError
     */
    public static googleAuth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/google',
        });
    }
    /**
     * Google auth callback
     * @returns any
     * @throws ApiError
     */
    public static googleAuthRedirect(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/google/callback',
        });
    }
    /**
     * Verify user email
     * @param requestBody
     * @returns AuthCredentialsDto
     * @throws ApiError
     */
    public static verifyEmail(
        requestBody: ValidateEmailRequest,
    ): CancelablePromise<AuthCredentialsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/verify-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Request Password Reset
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static requestResetPassword(
        requestBody: RecoverPasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/recover-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Reset
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static resetPassword(
        requestBody: ResetPasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
