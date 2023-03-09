import { Typography, TypographyProps } from "@peersyst/react-native-components";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import Balance from "module/wallet/component/display/Balance/Balance";
import useGetBalance from "module/wallet/query/useGetBalance";
import { AssetType } from "module/wallet/wallet.types";
import { useAssetSelect } from "../hook/useAssetSelect";

export interface AssetSelectDisplayProps {
    onPress: () => void;
}

export type AssetValueDisplayProps = Omit<TypographyProps, "children">;

export const AssetValueDisplay = ({ ...rest }: AssetValueDisplayProps): JSX.Element => {
    const { index, asset } = useAssetSelect();
    const { data: { freeBalance } = { freeBalance: "0" } } = useGetBalance(index);
    const { type, nft, ft } = asset ?? {};
    return (
        <>
            {type === AssetType.NFT && (
                <Typography numberOfLines={1} {...rest}>
                    {nft?.nftName}
                </Typography>
            )}
            {type === AssetType.FT && (
                <Balance units={ft?.type.tokenName} balance={BNToNumber(ft?.amount || "0", ft?.type.decimals)} {...rest} />
            )}
            {type === AssetType.NATIVE_TOKEN && <Balance units="token" balance={freeBalance} {...rest} />}
        </>
    );
};

export default AssetValueDisplay;
