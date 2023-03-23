import { useQuery, UseQueryResult } from "react-query";
import Queries from "../../../query/queries";
import useServiceInstance from "module/wallet/hook/useServiceInstance";

import { PartialDappDto } from "module/api/common";
import { SignInRequestsService } from "module/api/service";

export enum SignInRequestStatus {
    PENDING = "pending",
    SIGNED = "signed",
    REJECTED = "rejected",
    REQUEST_EXPIRED = "request_expired",
    SESSION_EXPIRED = "session_expired",
}
export default function (index?: number): UseQueryResult<PartialDappDto[]> {
    const { network, queryEnabled, serviceInstance } = useServiceInstance(index);

    return useQuery(
        [Queries.SIGNER_APP_GET_CONNECTED_SITES, serviceInstance?.getAddress(), network],
        () => SignInRequestsService.getSignInRequests(SignInRequestStatus.SIGNED, network, serviceInstance?.getAddress()),
        {
            enabled: queryEnabled,
        },
    );
}
