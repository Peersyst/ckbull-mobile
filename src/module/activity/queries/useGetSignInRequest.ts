import { useMutation } from "react-query";
import { SignInRequestDto, SignInRequestsService } from "module/api/service";
import { UseCustomMutationOptions } from "query-utils";

export default function useGetSignInRequest(options: UseCustomMutationOptions<SignInRequestDto, unknown, string> = {}) {
    return useMutation((signInToken: string) => SignInRequestsService.getSignInRequest(signInToken), options);
}
