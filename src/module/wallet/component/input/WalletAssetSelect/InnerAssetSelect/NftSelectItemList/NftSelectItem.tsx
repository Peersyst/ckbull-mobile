import { AssetType } from "module/wallet/wallet.types";
import { Nft } from "ckb-peersyst-sdk";
import SelectItemCard from "../SelectItemCard";
import { useAssetSelect } from "../../hook/useAssetSelect";
import { Typography } from "@peersyst/react-native-components";
import { NftSelectItemImage } from "./NftSelectItemImage";

export interface NftSelectItemProps {
    nft: Nft;
}

export const NftSelectItem = ({ nft }: NftSelectItemProps) => {
    const { nftName, tokenUri, tokenId } = nft;
    const { setSelectedAsset } = useAssetSelect();

    const handleOnPress = () => {
        setSelectedAsset({
            type: AssetType.NFT,
            nft,
        });
    };

    return (
        <SelectItemCard onPress={handleOnPress}>
            <NftSelectItemImage uri={tokenUri} tokenId={tokenId} />
            <Typography variant="body2Regular" numberOfLines={1} color="overlay.100">
                {nftName}
            </Typography>
        </SelectItemCard>
    );
};
