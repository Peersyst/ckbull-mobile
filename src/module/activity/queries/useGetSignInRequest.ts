import { useQuery, UseQueryOptions } from "react-query";
import { SignInRequestDto, SignInRequestsService } from "module/api/service";
import Queries from "../../../query/queries";
import { QueryResult } from "query-utils";

export default function useGetSignInRequest(
    signInToken: string,
    options?: UseQueryOptions<SignInRequestDto, string, SignInRequestDto, string[]>,
): QueryResult<SignInRequestDto> {
    return useQuery([Queries.GET_SIGN_IN_REQUEST, signInToken], () => SignInRequestsService.getSignInRequest(signInToken), options);
}
