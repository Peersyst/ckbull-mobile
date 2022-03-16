import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import useGetTransactions from "module/transaction/query/useGetTransactions";
import Divider from "module/common/component/display/Divider/Divider";
import useWallet from "module/wallet/hook/useWallet";
import { Typography } from "react-native-components";
import { translate } from "locale";
import { List } from "react-native-components";

const NoTransactionsComponent = (): JSX.Element => {
    return (
        <Typography variant="body1" textAlign="center" style={{ marginTop: "10%" }}>
            {translate("no_transactions")}
        </Typography>
    );
};

const TransactionsList = (): JSX.Element => {
    const {
        state: { selectedAccount },
    } = useWallet();

    const { data = [], refetch, isFetching, isLoading } = useGetTransactions(selectedAccount);

    return (
        <List
            onRefresh={refetch}
            refreshing={isFetching || isLoading}
            data={data}
            ListEmptyComponent={isLoading ? undefined : NoTransactionsComponent}
            renderItem={({ item: tx }) => <TransactionCard {...tx} />}
            keyExtractor={(tx) => tx.transactionHash}
            ItemSeparatorComponent={() => <Divider width="full-width" />}
            style={{ paddingHorizontal: "5%" }}
        />
    );
};

export default TransactionsList;
