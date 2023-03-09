import MainList from "module/main/component/display/MainList/MainList";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import useGetTransactions from "module/transaction/query/useGetTransactions";
import { isDAODeposit } from "../../../utils/isDAODeposit";
import EmptyDepositsComponent from "../../input/DepositsSelector/EmptyDepositsComponent/EmptyDepositsComponent";

const DAODepositsList = (): JSX.Element => {
    const { data = [], isLoading, refetch } = useGetTransactions({ filter: (tx) => isDAODeposit(tx.type) });

    return (
        <MainList
            onRefresh={refetch}
            loading={isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : <EmptyDepositsComponent />}
            renderItem={({ item: tx }) => <TransactionCard transaction={tx} />}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default DAODepositsList;
