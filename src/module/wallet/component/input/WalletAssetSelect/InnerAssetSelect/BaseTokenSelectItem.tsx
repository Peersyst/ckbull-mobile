import TokenIcon, { TokenIconProps } from "module/token/component/display/TokenIcon/TokenIcon";
import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import SelectItemCard, { SelectItemCardProps } from "./SelectItemCard";

export interface BaseTokenSelectItemProps {
    token?: TokenIconProps["token"];
    balance: BalanceProps["balance"];
    units: BalanceProps["units"];
    onPress: SelectItemCardProps["onPress"];
}

const BaseTokenSelectItem = ({ token, balance, units, onPress }: BaseTokenSelectItemProps): JSX.Element => {
    return (
        <SelectItemCard onPress={onPress}>
            <TokenIcon token={token} nativeToken={token === undefined} height={36} width={36} />
            <Balance balance={balance} variant="body2Regular" units={units} />
        </SelectItemCard>
    );
};

export default BaseTokenSelectItem;
