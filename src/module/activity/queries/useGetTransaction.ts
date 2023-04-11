import Queries from "../../../query/queries";
import { useQuery } from "react-query";

const mockCKBSdkTransaction = (id: number) => {
    return {
        senders: [
            "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqfafsuem9n6en7pd8z4he0clxpy8fsx4scfheym5",
            "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqge0t60zaexkn7yhcsel9rvmg3xqp3dn3qgw3z7k",
        ],
        receivers: ["ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqge0t60zaexkn7yhcsel9rvmg3xqp3dn3qgw3z7k"],
        amount: 1000000,
        type: "ckb",
        id,
    };
};

/**
 * This is a mock function, it will be replaced by the real function when SDK calls are ready
 * @param id The Transaction id
 * @returns the sendes, receivers, amount, type and id of the transaction with id = id
 */

export default function useGetTransaction(id: number) {
    return useQuery([Queries.GET_TRANSACTION], () => mockCKBSdkTransaction(id));
}
