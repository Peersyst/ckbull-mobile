import { useQuery, UseQueryResult } from "react-query";
import useSelectedWalletIndex from "module/wallet/hook/useSelectedWalletIndex";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import { Nft } from "ckb-peersyst-sdk";

export default function (index?: number): UseQueryResult<Nft[]> {
    const network = useSelectedNetwork();
    const selectedWallet = useSelectedWalletIndex();
    const usedIndex = index ?? selectedWallet;
    return useQuery(["nfts", usedIndex, network], (): Nft[] => {
        return [
            {
                tokenId: "0",
                tokenUri: "https://ipfs.fleek.co/ipfs/bafybeiffkdczuvd6neggcggg63xd2ptdartq2rkzufob55qfkrrrby3kky",
                nftName: "CBK CAMEL 21 #19",
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
                },
            },
        ];
    });
}
