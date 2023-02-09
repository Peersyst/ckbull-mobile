import { AssetType } from "module/wallet/wallet.types";
import { Nft } from "ckb-peersyst-sdk";
import SelectItemCard from "../SelectItemCard";
import { useAssetSelect } from "../../hook/useAssetSelect";
import { NftSelectItemImage } from "./NftSelectItemImage";
import { Typography } from "@peersyst/react-native-components";

export interface NftSelectItemProps {
    nft: Nft;
}

export const NftSelectItem = ({ nft }: NftSelectItemProps) => {
    const { nftName, tokenUri, tokenId } = nft;
    console.log("nft", nft);

    const { setSelectedAsset } = useAssetSelect();
    const handleOnPress = () => {
        setSelectedAsset({
            type: AssetType.NFT,
            nft,
        });
    };
    return (
        <SelectItemCard onPress={handleOnPress}>
            {/*<NftSelectItemImage uri={tokenUri} tokenId={tokenId} />*/}
            <Typography variant="body2Strong" numberOfLines={1}>
                {nftName}
            </Typography>
        </SelectItemCard>
    );
};
