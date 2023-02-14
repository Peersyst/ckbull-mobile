import useGetNfts from "module/nft/query/useGetNfts";
import NftCard from "module/nft/component/display/NftCard/NftCard";
import MainList from "module/main/component/display/MainList/MainList";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import useSelectedWallet from "module/wallet/hook/useSelectedWallet";
import { Nft } from "ckb-peersyst-sdk";

export const tempNft: Nft = {
    tokenId: "0",
    tokenUri: "https://ipfs.fleek.co/ipfs/bafybeiffkdczuvd6neggcggg63xd2ptdartq2rkzufob55qfkrrrby3kky",
    nftName: "NEAR CAMEL 21 #19",
    total: 10,
    data: {
        title: "NEAR CAMEL 21 #19",
        description: "INDIAN CAMEL",
        media: "https://ipfs.fleek.co/ipfs/bafybeiffkdczuvd6neggcggg63xd2ptdartq2rkzufob55qfkrrrby3kky",
        media_hash: null,
        copies: 1,
        issued_at: null,
        expires_at: null,
        starts_at: null,
        updated_at: null,
        extra: null,
        reference: null,
        reference_hash: null,
        operator: "nuer.ckb",
    },
};

const NftsList = (): JSX.Element => {
    const { index } = useSelectedWallet();
    //const { data = [], isLoading } = useGetNfts(index);
    const data = [tempNft];
    const isLoading = false;
    return (
        <MainList
            loading={isLoading}
            data={data}
            renderItem={({ item: nft }) => <NftCard nft={nft} />}
            ListEmptyComponent={isLoading ? undefined : <EmptyListComponent />}
            keyExtractor={(nft, i) => nft?.tokenId ?? i}
        />
    );
};

export default NftsList;
