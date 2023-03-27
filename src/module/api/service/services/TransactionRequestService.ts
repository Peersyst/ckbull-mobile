/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteTransactionRequestDto } from '../models/CompleteTransactionRequestDto';
import type { CreateTransactionRequestBody } from '../models/CreateTransactionRequestBody';
import type { DeclineTransactionRequest } from '../models/DeclineTransactionRequest';
import type { SignTransactionRequest } from '../models/SignTransactionRequest';
import type { SimpleTransactionRequestDto } from '../models/SimpleTransactionRequestDto';
import type { TransactionRequestStatusDto } from '../models/TransactionRequestStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionRequestService {

    /**
     * @param status
     * @param network
     * @param address
     * @returns CompleteTransactionRequestDto
     * @throws ApiError
     */
    public static getTransactionRequests(
        status: any,
        network: any,
        address: any,
    ): CancelablePromise<Array<CompleteTransactionRequestDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/transaction-request',
            query: {
                'status': status,
                'network': network,
                'address': address,
            },
        });
    }

    /**
     * Create a new sign-in-request
     * @param requestBody
     * @param xTimestamp The timestamp of the request
     * @param xSignature The signature of the request
     * @param xApiKey The API key of the dApp
     * @returns SimpleTransactionRequestDto
     * @throws ApiError
     */
    public static createTransactionRequest(
        requestBody: CreateTransactionRequestBody,
        xTimestamp?: string,
        xSignature?: string,
        xApiKey?: string,
    ): CancelablePromise<SimpleTransactionRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/transaction-request',
            headers: {
                'x-timestamp': xTimestamp,
                'x-signature': xSignature,
                'x-api-key': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param transactionToken
     * @returns SimpleTransactionRequestDto
     * @throws ApiError
     */
    public static getTransactionRequestByTransactionToken(
        transactionToken: string,
    ): CancelablePromise<SimpleTransactionRequestDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/transaction-request/{transactionToken}',
            path: {
                'transactionToken': transactionToken,
            },
        });
    }

    /**
     * @param transactionToken
     * @returns TransactionRequestStatusDto
     * @throws ApiError
     */
    public static getTransactionRequestStatus(
        transactionToken: string,
    ): CancelablePromise<TransactionRequestStatusDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/transaction-request/{transactionToken}/status',
            path: {
                'transactionToken': transactionToken,
            },
        });
    }

    /**
     * @param transactionToken
     * @param requestBody
     * @returns SimpleTransactionRequestDto
     * @throws ApiError
     */
    public static signTransactionRequest(
        transactionToken: string,
        requestBody: SignTransactionRequest,
    ): CancelablePromise<SimpleTransactionRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/transaction-request/{transactionToken}/sign',
            path: {
                'transactionToken': transactionToken,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param transactionToken
     * @param requestBody
     * @returns SimpleTransactionRequestDto
     * @throws ApiError
     */
    public static declineTransactionRequest(
        transactionToken: string,
        requestBody: DeclineTransactionRequest,
    ): CancelablePromise<SimpleTransactionRequestDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/transaction-request/{transactionToken}/decline',
            path: {
                'transactionToken': transactionToken,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}