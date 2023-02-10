import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import MainSectionList from "module/main/component/display/MainSectionList/MainSectionList";
import useGetPendingTransactions from "module/activity/queries/useGetPendingTransactions";

const PendingTransactionRequestList = (): JSX.Element => {
    const { data: pendingTransactions, isLoading, refetch, isRefetching } = useGetPendingTransactions();

    return (
        <MainSectionList
            sections={pendingTransactions || []}
            onRefresh={refetch}
            loading={isRefetching}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default PendingTransactionRequestList;
