import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import useGetNfts from "module/nft/query/useGetNfts";
import { useAssetSelect } from "../../hook/useAssetSelect";
import { NftSelectItem } from "./NftSelectItem";

const NftSelectItemList = (): JSX.Element => {
    const { index } = useAssetSelect();
    const { data: nfts = [] } = useGetNfts(index);
    const translate = useTranslate();
    return (
        <>
            {nfts.length > 0 && (
                <Col gap={20}>
                    <Typography variant="body2Strong" numberOfLines={1} color="overlay.500">
                        {translate("nfts")}
                    </Typography>
                    {nfts.map((nft, index) => (
                        <NftSelectItem nft={nft} key={index} />
                    ))}
                </Col>
            )}
        </>
    );
};

export default NftSelectItemList;
