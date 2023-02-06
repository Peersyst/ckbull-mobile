import useGetPendingTransactionRequest from "module/activity/queries/useGetPendingTransactionRequest";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { List } from "@peersyst/react-native-components";

const PendingList = (): JSX.Element => {
    const { data: pendingTransactionRequest, isLoading, refetch } = useGetPendingTransactionRequest();

    return (
        <List
            data={pendingTransactionRequest}
            onRefresh={refetch}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            contentContainerStyle={{ paddingHorizontal: 20 }}
        />
    );
};

export default PendingList;
