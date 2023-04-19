import { SignedSignInRequest, SignInRequestsService } from "module/api/service";
import { useMutation, useQueryClient } from "react-query";
import Queries from "../../../query/queries";

export default function useSignSignInRequest(signInToken: string, index: number | undefined) {
    const queryClient = useQueryClient();

    return useMutation((body: SignedSignInRequest) => SignInRequestsService.signIn(signInToken, body), {
        onSuccess: async ({ metadata: { network } }) => {
            await queryClient.invalidateQueries([Queries.SIGNER_APP_GET_CONNECTED_DAPPS, index, network]);
        },
    });
}
