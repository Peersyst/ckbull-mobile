import useGetPendingTransactionRequest from "module/activity/queries/useGetPendingTransactionRequest";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { Typography } from "@peersyst/react-native-components";
import useGetDateFromTimestamp from "module/activity/hook/useGetDateFromTimestamp";
import MainSectionList from "module/main/component/display/MainSectionList/MainSectionList";
import { PendingListSection } from "module/activity/component/display/PendingTransactionsList/PendingTransactionsList.styles";

const PendingTransactionRequestList = (): JSX.Element => {
    const { data: pendingTransactionSections, isLoading, refetch, isRefetching } = useGetPendingTransactionRequest();
    const { formatDate } = useGetDateFromTimestamp();

    const renderSectionHeader = ({ section: { title } }: any): JSX.Element => {
        return (
            <PendingListSection>
                <Typography variant="body3Strong">{formatDate(title)}</Typography>
            </PendingListSection>
        );
    };

    return (
        <MainSectionList
            sections={pendingTransactionSections || []}
            onRefresh={refetch}
            refreshing={isRefetching}
            renderSectionHeader={renderSectionHeader}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default PendingTransactionRequestList;
