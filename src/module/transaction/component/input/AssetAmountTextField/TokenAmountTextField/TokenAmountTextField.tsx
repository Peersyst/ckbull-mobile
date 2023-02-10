import BaseAssetAmountTextField from "../BaseAssetAmountTextField/BaseAssetAmountTextField";
import { TokenAmount } from "module/token/types";
import { NumericTextFieldProps } from "module/common/component/input/NumericTextField/NumericTextField";
//import { useFTAmountTextFieldValidator } from "./hook/useFTAmountTextFieldValidator";
import { useControlled } from "@peersyst/react-hooks";

export interface TokenAmountTextFieldProps extends Omit<NumericTextFieldProps, "validators" | "suffix"> {
    token: TokenAmount;
}

const TokenAmountTextField = ({ token, defaultValue = "", value, onChange, error: errorProp, ...rest }: TokenAmountTextFieldProps) => {
    const {
        type: { decimals, tokenName },
    } = token;
    const [amount, setAmount] = useControlled(defaultValue, value, onChange);

    //const { error } = useFTAmountTextFieldValidator({ amount, token });

    return (
        <BaseAssetAmountTextField
            maxDecimals={parseInt(decimals.toString(), 10)}
            error={errorProp}
            value={amount}
            onChange={setAmount}
            units={tokenName}
            {...rest}
        />
    );
};

export default TokenAmountTextField;
