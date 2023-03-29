import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import MainList from "module/main/component/display/MainList/MainList";
import useGetSignedTransactionRequest from "module/activity/queries/useGetSignedTransactions";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import { useTranslate } from "module/common/hook/useTranslate";

const SignedTransactionsList = (): JSX.Element => {
    const translate = useTranslate();
    const { data: signedTransactions, isLoading, refetch } = useGetSignedTransactionRequest();

    return (
        <MainList
            data={signedTransactions}
            onRefresh={refetch}
            renderItem={({ item: signedTransaction }) => <TransactionCard transaction={signedTransaction} />}
            ListEmptyComponent={
                isLoading ? undefined : (
                    <EmptyListComponent title={translate("noSignedRequests")} text={translate("noSignedRequestsDescription")} />
                )
            }
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default SignedTransactionsList;
