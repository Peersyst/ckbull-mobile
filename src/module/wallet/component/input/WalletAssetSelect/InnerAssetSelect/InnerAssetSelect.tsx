import { Col, Skeleton, Suspense } from "@peersyst/react-native-components";
import { useGetAllAssets } from "module/wallet/query/useGetAllAssets";
import { useAssetSelect } from "../hook/useAssetSelect";
import CKBSelectItem from "./CKBSelectItem";
import NftSelectItemList from "./NftSelectItemList/NftSelectItemList";
import TokenSelectItemlist from "./TokenSelectItemList/TokenSelectItemlist";

export const ASSET_SELECT_NUM_OF_SKELETONS = 3;

export const InnerAssetSelectSkeletons = () => {
    return (
        <Col gap="5%">
            {Array.from({ length: ASSET_SELECT_NUM_OF_SKELETONS }).map((_, i) => (
                <Skeleton key={i}>
                    <CKBSelectItem />
                </Skeleton>
            ))}
        </Col>
    );
};

const InnerAssetSelect = () => {
    const { index } = useAssetSelect();
    const { isLoading } = useGetAllAssets(index);
    return (
        <Suspense isLoading={isLoading} fallback={<InnerAssetSelectSkeletons />}>
            <Col>
                <CKBSelectItem />
                <TokenSelectItemlist />
                <NftSelectItemList />
            </Col>
        </Suspense>
    );
};

export default InnerAssetSelect;
