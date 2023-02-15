import { placeholder_image } from "images";
import { TokenIconRoot } from "./TokenIcon.styles";
import { TokenAmount } from "module/token/types";

export interface TokenSize {
    width: number;
    height: number;
}

export interface TokenIconProps extends Partial<TokenSize> {
    token?: TokenAmount;
    nativeToken?: boolean;
}

const TokenIcon = ({ height = 44, width = 44, token, nativeToken }: TokenIconProps) => {
    const sizeProps = { height, width };
    const useNativeToken = nativeToken && !token;
    return <TokenIconRoot source={useNativeToken ? placeholder_image : { uri: token?.type.imageUri }} {...sizeProps} />;
};

export default TokenIcon;
