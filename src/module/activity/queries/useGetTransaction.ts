import Queries from "../../../query/queries";
import { useQuery } from "react-query";

export default function useGetTransaction() {
    const mockCKBSdkTransaction = () => {
        return {
            senders: [
                "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqfafsuem9n6en7pd8z4he0clxpy8fsx4scfheym5",
                "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqge0t60zaexkn7yhcsel9rvmg3xqp3dn3qgw3z7k",
            ],
            receivers: ["ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqge0t60zaexkn7yhcsel9rvmg3xqp3dn3qgw3z7k"],
            amount: 1000000,
            type: "ckb",
        };
    };

    return useQuery([Queries.GET_TRANSACTION], () => mockCKBSdkTransaction());
}
