import { useMutation, useQueryClient } from "react-query";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { TransactionSkeletonType } from "@ckb-lumos/helpers";
import { WalletStorage } from "module/wallet/WalletStorage";
import { useSettings } from "module/settings/hook/useSettings";
import Queries from "../../../query/queries";

export default function useSignTransaction() {
    const { serviceInstance, index: usedIndex } = useServiceInstance();
    const { fee } = useSettings();
    const baseQueries = [Queries.GET_BALANCE, Queries.GET_TRANSACTIONS];
    const queryClient = useQueryClient();

    const handleSign = async (transaction: TransactionSkeletonType) => {
        const mnemonic = await WalletStorage.getMnemonic(usedIndex!);
        return await serviceInstance?.fillAndSignPartialTransaction({ transaction, mnemonic: mnemonic!, feeRate: fee });
    };

    return useMutation((transaction: TransactionSkeletonType) => handleSign(transaction), {
        onSuccess: () => {
            queryClient.invalidateQueries(baseQueries);
        },
    });
}