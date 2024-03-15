import i18n from "locale/i18n";
import { en } from "locale/locales/en/en";
import { ApiError } from "module/api/service";

export interface HandleApiErrorMessageResult {
    message: string;
    type: "error" | "warning";
}

export type UseHandleErrorMessage = (error: ApiError | any) => HandleApiErrorMessageResult;

export function handleErrorMessage(error: ApiError | any, translate: typeof i18n.t): HandleApiErrorMessageResult {
    const code = error.body?.statusCode || error.status;
    const message = error.body?.message || error.statusText;
    if (!code || code === 500) return { message: translate("somethingWentWrong", { ns: "error" }), type: "error" };
    else if (code === 401) return { message: translate("sessionExpired", { ns: "error" }), type: "warning" };
    else return { message: translate(message in en.error ? error.body.message : "somethingWentWrong", { ns: "error" }), type: "error" };
}
