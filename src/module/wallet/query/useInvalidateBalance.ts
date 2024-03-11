import Queries from "../../../query/queries";
import { useInvalidateServiceInstanceQueries } from "./useInvalidateServiceInstanceQueries";

export default function useInvalidateBalance(walletIndex?: number): () => void {
    const invalidateQueries = useInvalidateServiceInstanceQueries(walletIndex);
    function invalidateBalance() {
        invalidateQueries([Queries.GET_BALANCE]);
    }
    return invalidateBalance;
}
