import { BigInteger } from "module/common/utils/BalanceOperations/BigInteger";
import useGetTokens from "module/token/query/useGetTokens";
import { useMemo } from "react";
import { useAssetSelect } from "../../hook/useAssetSelect";
import { TokenSelectItem } from "./TokenSelectItem";

const TokenSelectItemlist = (): JSX.Element => {
    const { index } = useAssetSelect();
    const { data: tokens = [] } = useGetTokens(index);
    const tokensWithBalance = useMemo(() => {
        return tokens.filter((token) => BigInteger.gt(token.amount.toString(), "0"));
    }, [tokens]);
    return <>{tokensWithBalance.length > 0 && tokensWithBalance.map((token, index) => <TokenSelectItem key={index} token={token} />)}</>;
};

export default TokenSelectItemlist;
