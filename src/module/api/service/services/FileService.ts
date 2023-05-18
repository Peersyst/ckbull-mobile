/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileService {

    /**
     * Upload an image
     * @returns string
     * @throws ApiError
     */
    public static uploadFile(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/image',
        });
    }

}