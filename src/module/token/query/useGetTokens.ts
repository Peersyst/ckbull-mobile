import { QueryResult } from "query-utils";
import { useQuery } from "react-query";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { TokenAmount } from "../types";
import Queries from "../../../query/queries";

const useGetTokens = (index?: number): QueryResult<TokenAmount[]> => {
    const { index: usedIndex, network, serviceInstance, queryEnabled } = useServiceInstance(index);
    return useQuery([Queries.GET_TOKENS, usedIndex, network], () => serviceInstance?.getTokensBalance(), {
        enabled: queryEnabled,
    });
};

export default useGetTokens;
