import { useInvalidateQueries } from "../../../query/useInvalidateQueries";
import useServiceInstance from "../hook/useServiceInstance";

/**
 * A hooks to invalidate queries for a given query, a walletIndex and a network.
 * For example if you want to invalidate the balance query for only one wallet on mainnet, you can use this hook.
 */
export function useInvalidateServiceInstanceQueries(index?: number) {
    const { index: usedIndex, network } = useServiceInstance(index);
    const invalidateAllQueries = useInvalidateQueries();
    async function handleInvalidate(queryKeys: string[]) {
        const queries = queryKeys.map((key) => [key, usedIndex, network]);
        await invalidateAllQueries(queries);
    }
    return handleInvalidate;
}
