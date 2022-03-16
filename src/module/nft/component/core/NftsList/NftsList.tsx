import Divider from "module/common/component/display/Divider/Divider";
import useWallet from "module/wallet/hook/useWallet";
import { List, Typography } from "react-native-components";
import useGetNfts from "module/nft/query/useGetNfts";
import NftCard from "module/nft/component/display/NftCard/NftCard";
import { translate } from "locale";

const NoNftsComponent = (): JSX.Element => {
    return (
        <Typography variant="body1" textAlign="center" style={{ marginTop: "10%" }}>
            {translate("no_nfts")}
        </Typography>
    );
};

const NftsList = (): JSX.Element => {
    const {
        state: { selectedAccount },
    } = useWallet();
    const { data = [], refetch, isFetching, isLoading } = useGetNfts(selectedAccount);

    return (
        <List
            onRefresh={refetch}
            refreshing={isFetching || isLoading}
            data={data}
            renderItem={({ item: nft }) => <NftCard {...nft} />}
            ListEmptyComponent={isLoading ? undefined : NoNftsComponent}
            keyExtractor={(tx) => tx.transactionHash}
            ItemSeparatorComponent={() => <Divider width="full-width" />}
            style={{ paddingHorizontal: "5%" }}
        />
    );
};

export default NftsList;
