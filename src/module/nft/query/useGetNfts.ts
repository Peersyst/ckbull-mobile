import { useQuery, UseQueryResult } from "react-query";
import { Nft } from "module/nft/types";
import useServiceInstance from "module/wallet/hook/useServiceInstance";

export default function (index?: number): UseQueryResult<Nft[]> {
    const { index: usedIndex, network, serviceInstance } = useServiceInstance(index);
    return useQuery(["nfts", usedIndex, network], () => {
        return serviceInstance?.getNfts();
    });
}
