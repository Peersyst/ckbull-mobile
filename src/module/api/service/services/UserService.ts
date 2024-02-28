/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { CreateVerificationTokenRequest } from '../models/CreateVerificationTokenRequest';
import type { PrivateUserDto } from '../models/PrivateUserDto';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Get user info
     * @returns UserDto
     * @throws ApiError
     */
    public static info(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user',
        });
    }
    /**
     * Register a new user
     * @param requestBody
     * @returns PrivateUserDto
     * @throws ApiError
     */
    public static register(
        requestBody: CreateUserRequest,
    ): CancelablePromise<PrivateUserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update user
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static update(
        requestBody: UpdateUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user
     * @returns any
     * @throws ApiError
     */
    public static delete(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user',
        });
    }
    /**
     * Resends an verification email
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static verificationToken(
        requestBody: CreateVerificationTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/verificationToken',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
