import { AssetType } from "module/wallet/wallet.types";
import { useAssetSelect } from "../../hook/useAssetSelect";
import BaseTokenSelectItem from "../BaseTokenSelectItem";
import { TokenAmount } from "module/token/types";

export interface TokenSelectItemProps {
    token: TokenAmount;
}

export const TokenSelectItem = ({ token }: TokenSelectItemProps) => {
    const { amount = "0", type } = token;
    const { tokenName } = type;
    const { setSelectedAsset } = useAssetSelect();
    const handleOnPress = () => {
        setSelectedAsset({
            type: AssetType.FT,
            ft: token,
        });
    };

    return <BaseTokenSelectItem onPress={handleOnPress} units={tokenName} balance={amount} token={token} />;
};
