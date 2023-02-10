import { TextFieldProps, useTheme } from "@peersyst/react-native-components";
import { Asset } from "module/wallet/wallet.types";
import { AssetType } from "module/wallet/wallet.types";
import CKBAmountTextField from "./CKBAmountTextField/CKBAmountTextField";
import NftAmountTextField from "./NftAmountTextField/NftAmountTextField";
import TokenAmountTextField from "./TokenAmountTextField/TokenAmountTextField";

export interface AssetAmountTextFieldProps extends Omit<TextFieldProps, "keyboardType" | "validators"> {
    asset: Asset;
    index?: number;
}

const AssetAmountTextField = ({ asset, index = 0, onChange, value, ...rest }: AssetAmountTextFieldProps) => {
    const { palette } = useTheme();
    return (
        <>
            {asset.type === AssetType.NATIVE_TOKEN && (
                <CKBAmountTextField
                    onChange={onChange}
                    value={value}
                    index={index}
                    {...rest}
                    style={{ component: { backgroundColor: "transparent", borderColor: palette.overlay[300]["24%"] } }}
                />
            )}
            {asset.type === AssetType.FT && (
                <TokenAmountTextField
                    onChange={onChange}
                    value={value}
                    token={asset.ft!}
                    {...rest}
                    style={{ component: { backgroundColor: "transparent", borderColor: palette.overlay[300]["24%"] } }}
                />
            )}
            {asset.type === AssetType.NFT && (
                <NftAmountTextField
                    {...rest}
                    style={{ component: { backgroundColor: "transparent", borderColor: palette.overlay[300]["24%"] } }}
                />
            )}
        </>
    );
};

export default AssetAmountTextField;
