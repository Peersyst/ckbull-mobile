import MainList from "module/main/component/display/MainList/MainList";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import useGetTransactions from "module/transaction/query/useGetTransactions";
import { isUnlockOrWithdrawDAO } from "../../../utils/isUnlockOrWithdrawDAO";
import EmptyCompletedWithdrawalsList from "../../feedback/EmptyCompletedWithdrawalsList/EmptyCompletedWithdrawalsList";

const DAOCompletedWithdrawalsList = (): JSX.Element => {
    const { data = [], isLoading, refetch } = useGetTransactions({ filter: (tx) => isUnlockOrWithdrawDAO(tx.type) });

    return (
        <MainList
            onRefresh={refetch}
            loading={isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : <EmptyCompletedWithdrawalsList />}
            renderItem={({ item: tx }) => <TransactionCard transaction={tx} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default DAOCompletedWithdrawalsList;
