import { useMutation } from "react-query";
import { SignInRequestDto, SignInRequestsService } from "module/api/service";

interface UseGetSignInRequestOptions {
    onSuccess?: (signInRequest: SignInRequestDto) => void;
    onError?: () => void;
}

export default function useGetSignInRequest({ onSuccess }: UseGetSignInRequestOptions) {
    return useMutation((signInToken: string) => SignInRequestsService.getSignInRequest(signInToken), {
        onSuccess: (data) => {
            onSuccess?.(data);
        },
    });
}
