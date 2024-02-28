/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisconnectRequest } from '../models/DisconnectRequest';
import type { PartialDappDto } from '../models/PartialDappDto';
import type { SignedSignInRequest } from '../models/SignedSignInRequest';
import type { SignInRequestDto } from '../models/SignInRequestDto';
import type { SignInRequestStatusDto } from '../models/SignInRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SignInRequestsService {
    /**
     * @param status
     * @param network
     * @param address
     * @returns PartialDappDto
     * @throws ApiError
     */
    public static getSignInRequests(
        status: any,
        network: any,
        address: any,
    ): CancelablePromise<Array<PartialDappDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sign-in-requests',
            query: {
                'status': status,
                'network': network,
                'address': address,
            },
        });
    }
    /**
     * Create a new sign-in-request
     * @param xTimestamp The timestamp of the request
     * @param xSignature The signature of the request
     * @param xApiKey The API key of the dApp
     * @returns SignInRequestDto
     * @throws ApiError
     */
    public static createSignInRequest(
        xTimestamp?: string,
        xSignature?: string,
        xApiKey?: string,
    ): CancelablePromise<SignInRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sign-in-requests',
            headers: {
                'x-timestamp': xTimestamp,
                'x-signature': xSignature,
                'x-api-key': xApiKey,
            },
        });
    }
    /**
     * @param apiKey
     * @returns SignInRequestDto
     * @throws ApiError
     */
    public static getSignInRequestsByDApp(
        apiKey: string,
    ): CancelablePromise<Array<SignInRequestDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sign-in-requests/dapp/{apiKey}',
            path: {
                'apiKey': apiKey,
            },
        });
    }
    /**
     * @param token
     * @returns SignInRequestDto
     * @throws ApiError
     */
    public static getSignInRequest(
        token: string,
    ): CancelablePromise<SignInRequestDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sign-in-requests/{token}',
            path: {
                'token': token,
            },
        });
    }
    /**
     * @param token
     * @returns SignInRequestStatusDto
     * @throws ApiError
     */
    public static getSignInRequestStatus(
        token: string,
    ): CancelablePromise<SignInRequestStatusDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sign-in-requests/{token}/status',
            path: {
                'token': token,
            },
        });
    }
    /**
     * @param token
     * @param requestBody
     * @returns SignInRequestDto
     * @throws ApiError
     */
    public static signIn(
        token: string,
        requestBody: SignedSignInRequest,
    ): CancelablePromise<SignInRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sign-in-requests/{token}/sign',
            path: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param token
     * @returns SignInRequestDto
     * @throws ApiError
     */
    public static declineSignInRequest(
        token: string,
    ): CancelablePromise<SignInRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sign-in-requests/{token}/decline',
            path: {
                'token': token,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static disconnect(
        requestBody: DisconnectRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sign-in-requests/disconnect',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
