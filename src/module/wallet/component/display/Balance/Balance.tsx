import { BalanceProps } from "./Balance.types";
import { Skeleton, Typography } from "@peersyst/react-native-components";
import { useFormatBalance } from "./hook/useFormatBalance";

const Balance = ({
    balance,
    options,
    units,
    unitsPosition = "right",
    action = "display",
    loading = false,
    ...typographyProps
}: BalanceProps): JSX.Element => {
    const formattedBalance = useFormatBalance(balance, {
        numberFormatOptions: { maximumFractionDigits: 2, ...options },
        units,
        unitsPosition,
        action,
    });

    return (
        <Skeleton loading={loading}>
            <Typography numberOfLines={1} adjustsFontSizeToFit {...typographyProps}>
                {formattedBalance}
            </Typography>
        </Skeleton>
    );
};

export default Balance;
