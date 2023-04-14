import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import MainSectionList from "module/main/component/display/MainSectionList/MainSectionList";
import useGetPendingTransactions from "module/activity/queries/useGetPendingTransactions";
import { useTranslate } from "module/common/hook/useTranslate";

const PendingTransactionRequestList = (): JSX.Element => {
    const translate = useTranslate();
    const { data: pendingTransactions, isLoading, refetch, isRefetching } = useGetPendingTransactions();

    return (
        <MainSectionList
            sections={pendingTransactions || []}
            onRefresh={refetch}
            loading={isRefetching}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent title={translate("noPendingTransactionRequests")} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default PendingTransactionRequestList;
