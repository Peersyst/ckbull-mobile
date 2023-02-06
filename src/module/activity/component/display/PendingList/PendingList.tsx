import useGetPendingTransactionRequest from "module/activity/queries/useGetPendingTransactionRequest";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { Row, Typography } from "@peersyst/react-native-components";
import useGetDateFromTimestamp from "module/activity/hook/useGetDateFromTimestamp";
import { SectionList } from "react-native";

const PendingList = (): JSX.Element => {
    const { data: pendingTransactionSections, isLoading, refetch, isRefetching } = useGetPendingTransactionRequest();
    const { formatDate } = useGetDateFromTimestamp();

    const renderSectionHeader = ({ section: { title } }: any): JSX.Element => {
        return (
            <Row justifyContent="flex-start" style={{ marginVertical: 10 }}>
                <Typography variant="body3Strong">{formatDate(title)}</Typography>
            </Row>
        );
    };

    return (
        <SectionList
            sections={pendingTransactionSections || []}
            onRefresh={refetch}
            refreshing={isRefetching}
            renderSectionHeader={renderSectionHeader}
            stickySectionHeadersEnabled={false}
            renderItem={({ item: transactionRequest }) => <TransactionRequest transaction={transactionRequest} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 12 }}
        />
    );
};

export default PendingList;
