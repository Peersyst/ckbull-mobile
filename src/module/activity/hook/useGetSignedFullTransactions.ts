import { CompleteTransactionRequestDto } from "module/api/service";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useEffect, useState } from "react";
import useGetSignedTransactions from "../queries/useGetSignedTransactions";

export interface UseGetSignedFullTransactions {
    fullTransactions: FullTransaction[] | undefined;
    isLoading: boolean;
    refetch: () => void;
}

export default function useGetSignedFullTransactions(): UseGetSignedFullTransactions {
    const { data: signedTransactions, isLoading, refetch } = useGetSignedTransactions();
    const { serviceInstance } = useServiceInstance();

    const [fullTransactions, setFullTransactions] = useState<FullTransaction[] | undefined>(undefined);
    const [isFullTransactionLoading, setIsFullTransactionLoading] = useState<boolean>(false);

    const fetchFullTransactions = (signedTransactions: CompleteTransactionRequestDto[] | undefined) => {
        if (!signedTransactions?.length) return;
        const fullTransactions = signedTransactions.map(({ transaction: { transactionHash } }) =>
            serviceInstance!.getTransaction(transactionHash!),
        );
        setIsFullTransactionLoading(true);
        Promise.all(fullTransactions)
            .then((fullTransactions) => {
                setFullTransactions(fullTransactions);
                setIsFullTransactionLoading(false);
            })
            .catch(() => setIsFullTransactionLoading(false));
    };

    useEffect(() => fetchFullTransactions(signedTransactions), [signedTransactions]);

    return {
        fullTransactions,
        isLoading: isLoading || isFullTransactionLoading,
        refetch,
    };
}
