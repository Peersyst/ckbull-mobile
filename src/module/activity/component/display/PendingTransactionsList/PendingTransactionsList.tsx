import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import MainSectionList from "module/main/component/display/MainSectionList/MainSectionList";
import useGetParsedPendingTransactions from "module/activity/hook/useGetParsedPendingTransactions";

const PendingTransactionRequestList = (): JSX.Element => {
    const { parsedPendingTransactions, isLoading, refetch, isRefetching } = useGetParsedPendingTransactions();

    return (
        <MainSectionList
            sections={parsedPendingTransactions || []}
            onRefresh={refetch}
            refreshing={isRefetching}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default PendingTransactionRequestList;
