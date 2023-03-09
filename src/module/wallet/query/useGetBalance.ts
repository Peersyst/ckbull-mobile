import { useQuery } from "react-query";
import useServiceInstance from "../hook/useServiceInstance";
import Queries from "../../../query/queries";

const useGetBalance = (index?: number) => {
    const { serviceInstance, index: usedIndex, network, queryEnabled } = useServiceInstance(index);
    return useQuery([Queries.GET_BALANCE, usedIndex, network], () => serviceInstance?.getCKBBalance(), {
        refetchInterval: 1500,
        enabled: queryEnabled,
    });
};

export default useGetBalance;
