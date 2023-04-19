import { QueryResult } from "query-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { FullTransaction } from "module/common/service/CkbSdkService.types";

export default function (): QueryResult<FullTransaction[]> {
    const { index: usedIndex, network, queryEnabled } = useServiceInstance();

    return useQuery([Queries.SIGNER_APP_GET_SIGNED_TRANSACTIONS, usedIndex, network], () => undefined, {
        enabled: queryEnabled,
    });
}
