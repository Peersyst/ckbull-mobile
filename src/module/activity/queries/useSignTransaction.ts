import { useMutation, useQueryClient } from "react-query";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { TransactionSkeletonType } from "@ckb-lumos/helpers";
import { WalletStorage } from "module/wallet/WalletStorage";
import { useSettings } from "module/settings/hook/useSettings";
import Queries from "../../../query/queries";
import useCkbSync from "module/wallet/hook/useCkbSync";

export interface UseSignTransactionProps {
    onSuccess?: (hash: string | undefined) => void;
    onError?: () => void;
}

export default function useSignTransaction({ onSuccess, onError }: UseSignTransactionProps = {}) {
    const { serviceInstance, index: usedIndex } = useServiceInstance();
    const { fee } = useSettings();
    const baseQueries = [Queries.GET_BALANCE, Queries.GET_TRANSACTIONS];
    const queryClient = useQueryClient();
    const { synchronize } = useCkbSync();

    const handleSign = async (transaction: TransactionSkeletonType) => {
        const mnemonic = await WalletStorage.getMnemonic(usedIndex!);
        const txHash = await serviceInstance?.fillAndSignPartialTransaction({ transaction, mnemonic: mnemonic!, feeRate: fee });
        await synchronize();
        return txHash;
    };

    return useMutation((transaction: TransactionSkeletonType) => handleSign(transaction), {
        onSuccess: (hash) => {
            queryClient.invalidateQueries(baseQueries);
            onSuccess?.(hash);
        },
        onError,
    });
}
