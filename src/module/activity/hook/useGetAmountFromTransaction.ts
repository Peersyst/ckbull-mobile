import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { jsonToTransactionSkeletonInterface } from "ckb-peersyst-sdk";

import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

export default function useGetAmountFromTransaction() {
    const { serviceInstance } = useServiceInstance();

    const obtainAmountFromTransaction = (transaction: object): string => {
        const tx = jsonToTransactionSkeletonInterface(transaction);
        const amountInShannons = serviceInstance!.getAmountFromTransaction({ transaction: tx });
        return convertShannonsToCKB(amountInShannons);
    };

    return obtainAmountFromTransaction;
}
