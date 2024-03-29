import { useQuery } from "react-query";
import useUncommittedTransactions from "module/transaction/query/useUncommittedTransactions";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import { useMemo } from "react";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";

export interface UseGetTransactionsOptions {
    index?: number;
    filter?: (tx: FullTransaction) => boolean;
}

const useGetTransactions = ({ index, filter }: UseGetTransactionsOptions = {}) => {
    const { serviceInstance, index: usedIndex, network } = useServiceInstance(index);
    const { data: uncommitedTransactions = [], isLoading: uncommitedTransactionsLoading, refetch } = useUncommittedTransactions(usedIndex);

    const { data: transactions = [], isLoading: transactionsLoading } = useQuery(
        [Queries.GET_TRANSACTIONS, usedIndex, network],
        async () => {
            return serviceInstance?.getTransactions().reverse();
        },
    );

    const txs = useMemo(() => {
        const filteredTransacations = transactions.filter(
            (tx) => !uncommitedTransactions.find((uTx) => tx.transactionHash === uTx.transactionHash),
        );
        return filter
            ? [...uncommitedTransactions, ...filteredTransacations].filter(filter)
            : [...uncommitedTransactions, ...filteredTransacations];
    }, [uncommitedTransactions, transactions.length, filter]);

    return {
        data: txs,
        isLoading: uncommitedTransactionsLoading || transactionsLoading,
        refetch,
    };
};

export default useGetTransactions;
