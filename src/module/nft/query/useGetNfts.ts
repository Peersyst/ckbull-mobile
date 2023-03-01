import { useQuery, UseQueryResult } from "react-query";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { Nft } from "ckb-peersyst-sdk";

export default function (index?: number): UseQueryResult<Nft[]> {
    const { index: usedIndex, network, serviceInstance } = useServiceInstance(index);
    return useQuery([Queries.GET_NFTS, usedIndex, network], () => {
        return serviceInstance?.getNfts();
    });
}
