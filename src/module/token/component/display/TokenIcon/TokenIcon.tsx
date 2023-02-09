import { placeholder_image } from "images";
import { SUPPORTED_TOKENS } from "./SupportedTokens";
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

export function getSupportedTokenUri(symbol: string): string | undefined {
    return SUPPORTED_TOKENS[symbol as keyof typeof SUPPORTED_TOKENS];
}

const TokenIcon = ({ height = 44, width = 44, token, nativeToken }: TokenIconProps) => {
    const sizeProps = { height, width };
    const symbol = token?.type.tokenName;
    const url = symbol ? (token.type.imageUri ? token.type.imageUri : getSupportedTokenUri(symbol)) : undefined;
    return <TokenIconRoot source={nativeToken ? placeholder_image : { uri: url }} {...sizeProps} />;
};

export default TokenIcon;
