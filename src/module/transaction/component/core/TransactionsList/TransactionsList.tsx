import useGetTransactions from "module/transaction/query/useGetTransactions";
import MainList from "module/main/component/display/MainList/MainList";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import isSupportedTransaction from "./utils/isSupportedTransaction";
import EmptyTransactionsList from "../../feedback/EmptyTransactionsList/EmptyTransactionsList";

const TransactionsList = (): JSX.Element => {
    const { data = [], isLoading, refetch } = useGetTransactions({ filter: (tx) => isSupportedTransaction(tx.type) });
    return (
        <MainList
            onRefresh={refetch}
            loading={isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : <EmptyTransactionsList />}
            renderItem={({ item: tx }) => <TransactionCard transaction={tx} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default TransactionsList;
