import useGetBalance from "module/wallet/query/useGetBalance";
import { config } from "config";
import BaseAssetAmountTextField from "../BaseAssetAmountTextField/BaseAssetAmountTextField";
import { NumericTextFieldProps } from "module/common/component/input/NumericTextField/NumericTextField";
//import { useNEARAmountTextFieldValidator } from "./hook/useNEARAmountTextFieldValidator";
import { useControlled } from "@peersyst/react-hooks";
import { useTheme } from "@peersyst/react-native-styled";

export interface NEARAmountTextFieldProps extends Omit<NumericTextFieldProps, "validators" | "maxDecimals"> {
    index?: number;
    maxAmount?: string; //in NEAR
}

const NEARAmountTextField = ({
    index,
    defaultValue = "",
    value,
    onChange,
    error: errorProp,
    maxAmount,
    ...rest
}: NEARAmountTextFieldProps) => {
    const { palette } = useTheme();
    const [amount, setAmount] = useControlled(defaultValue, value, onChange);
    //const { error } = useNEARAmountTextFieldValidator({ index, amount, maxAmount });
    const { isLoading } = useGetBalance(index);

    return (
        <BaseAssetAmountTextField
            error={errorProp}
            value={amount}
            maxDecimals={24}
            onChange={setAmount}
            loading={isLoading}
            units={config.tokenName}
            style={{ component: { backgroundColor: "transparent", borderColor: palette.overlay[300]["24%"] } }}
            {...rest}
        />
    );
};

export default NEARAmountTextField;
