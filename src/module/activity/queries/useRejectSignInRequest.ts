import { useMutation } from "react-query";
import { SignInRequestsService } from "module/api/service";
import { UseHandleSignInRequestOptions } from "module/activity/hook/useHandleSignInRequest";

export default function useRejectSignInRequest(signInToken: string, { onSuccess, onError }: UseHandleSignInRequestOptions) {
    return useMutation(() => SignInRequestsService.declineSignInRequest(signInToken), {
        onSuccess,
        onError,
    });
}
