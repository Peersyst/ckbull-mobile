import useGetNfts from "module/nft/query/useGetNfts";
import NftCard from "module/nft/component/display/NftCard/NftCard";
import MainList from "module/main/component/display/MainList/MainList";
import useSelectedWallet from "module/wallet/hook/useSelectedWallet";
import EmptyNftList from "../../feedback/EmptyNftList/EmptyNftList";

const NftsList = (): JSX.Element => {
    const { index } = useSelectedWallet();
    const { data = [], isLoading, refetch } = useGetNfts(index);

    return (
        <MainList
            onRefresh={refetch}
            loading={isLoading}
            data={data}
            renderItem={({ item: nft }) => <NftCard nft={nft} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyNftList />}
            keyExtractor={(nft, i) => nft?.tokenId ?? i}
        />
    );
};

export default NftsList;
