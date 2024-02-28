/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteDAppDto } from '../models/CompleteDAppDto';
import type { CreateDappRequest } from '../models/CreateDappRequest';
import type { PartialDappDto } from '../models/PartialDappDto';
import type { SecretDto } from '../models/SecretDto';
import type { UpdateDappRequest } from '../models/UpdateDappRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DappsService {
    /**
     * Create a new dApp
     * @param requestBody
     * @returns CompleteDAppDto
     * @throws ApiError
     */
    public static create(
        requestBody: CreateDappRequest,
    ): CancelablePromise<CompleteDAppDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/dapps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get all dApp
     * @returns PartialDappDto
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<PartialDappDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/dapps',
        });
    }
    /**
     * Get a single dApp
     * @param id
     * @returns PartialDappDto
     * @throws ApiError
     */
    public static findOne(
        id: number,
    ): CancelablePromise<PartialDappDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/dapps/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Updates a  dApp
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: UpdateDappRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/dapps/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a dApp
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static remove(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/dapps/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Generate new API secret for a dApp
     * @param id
     * @returns SecretDto
     * @throws ApiError
     */
    public static generateNewApiSecret(
        id: number,
    ): CancelablePromise<SecretDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/dapps/{id}/credentials',
            path: {
                'id': id,
            },
        });
    }
}
