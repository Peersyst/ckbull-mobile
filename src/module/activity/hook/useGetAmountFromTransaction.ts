import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { jsonToTransactionSkeletonInterface } from "module/sdk/utils/parser";

export default function useGetAmountFromTransaction() {
    const { serviceInstance } = useServiceInstance();

    const obtainAmountFromTransaction = (transaction: any): bigint => {
        const tx = jsonToTransactionSkeletonInterface(transaction);
        return serviceInstance!.getAmountFromTransaction(tx);
    };

    return obtainAmountFromTransaction;
}
