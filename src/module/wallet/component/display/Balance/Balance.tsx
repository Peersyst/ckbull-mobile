import { AppCurrency, BalanceProps } from "./Balance.types";
import Typography from "module/common/component/display/Typography/Typography";
import { getCurrencyUnit } from "./utils/getCurrencyUnit";
import { useFormatNumber } from "module/common/hook/useFormatNumber";
import { getActionLabel } from "./utils/getActionLabel";
import { Suspense } from "@peersyst/react-native-components";
import Spinner from "module/common/component/feedback/Spinner/Spinner";

const Balance = ({
    balance,
    options,
    units,
    unitsPosition = "right",
    action = "display",
    isLoading = false,
    spinnerProps,
    ...typographyProps
}: BalanceProps): JSX.Element => {
    const formatedNum = useFormatNumber(balance.toString(), options);
    const actionLabel = getActionLabel[action];
    const currencyUnit = !units ? units : units in getCurrencyUnit ? getCurrencyUnit[units as AppCurrency] : units;

    return (
        <Suspense isLoading={isLoading} fallback={<Spinner testID="ActivityIndicator" {...spinnerProps} />}>
            <Typography {...typographyProps}>
                {currencyUnit && unitsPosition === "left" && currencyUnit + " "}
                {actionLabel + formatedNum}
                {currencyUnit && unitsPosition === "right" && " " + currencyUnit}
            </Typography>
        </Suspense>
    );
};

export default Balance;
