import useGetTransactions from "module/transaction/query/useGetTransactions";
import MainList from "module/main/component/display/MainList/MainList";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import isSupportedTransaction from "./utils/isSupportedTransaction";

const TransactionsList = (): JSX.Element => {
    const { data = [], isLoading, refetch } = useGetTransactions({ filter: (tx) => isSupportedTransaction(tx.type) });
    return (
        <MainList
            onRefresh={refetch}
            loading={isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            renderItem={({ item: tx }) => <TransactionCard transaction={tx} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default TransactionsList;
