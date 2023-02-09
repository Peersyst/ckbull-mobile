import useGetBalance from "module/wallet/query/useGetBalance";
import { AssetType } from "module/wallet/wallet.types";
import BaseTokenSelectItem from "./BaseTokenSelectItem";
import { useAssetSelect } from "../hook/useAssetSelect";

const CKBSelectItem = (): JSX.Element => {
    const { setSelectedAsset, index } = useAssetSelect();
    const { data: { freeBalance } = { available: "0" } } = useGetBalance(index);

    const handleOnPress = () => {
        setSelectedAsset({
            type: AssetType.NATIVE_TOKEN,
        });
    };

    return <BaseTokenSelectItem onPress={handleOnPress} units="token" balance={freeBalance!} />;
};

export default CKBSelectItem;
