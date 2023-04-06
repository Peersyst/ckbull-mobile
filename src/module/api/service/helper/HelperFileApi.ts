import { request as __request } from "../core/request";
import { OpenAPI } from "../core/OpenAPI";

export class HelperFileApi {
    /**
     * Upload a file to the server
     * @returns the url of the uploaded file
     * @throws ApiError
     */

    public static async uploadFile(file: File, path: string): Promise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: `/api/file/${path}`,
            formData: {
                file,
            },
        });
    }
}
