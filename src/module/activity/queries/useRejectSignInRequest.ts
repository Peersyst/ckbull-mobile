import { useMutation } from "react-query";
import { SignInRequestsService } from "module/api/service";

export default function useRejectSignInRequest(signInToken: string) {
    return useMutation(() => SignInRequestsService.declineSignInRequest(signInToken));
}
