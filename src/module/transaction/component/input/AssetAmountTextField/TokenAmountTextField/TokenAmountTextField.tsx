import BaseAssetAmountTextField from "../BaseAssetAmountTextField/BaseAssetAmountTextField";
import { TokenAmount } from "module/token/types";
import { NumericTextFieldProps } from "module/common/component/input/NumericTextField/NumericTextField";
//import { useFTAmountTextFieldValidator } from "./hook/useFTAmountTextFieldValidator";
import { useControlled } from "@peersyst/react-hooks";
import { useTokenAmountTextField } from "./hook/useTokenAmountTextField";

export interface TokenAmountTextFieldProps extends Omit<NumericTextFieldProps, "suffix"> {
    token: TokenAmount;
}

const TokenAmountTextField = ({ token, validators: validatorsProp, ...rest }: TokenAmountTextFieldProps) => {
    const {
        type: { decimals, tokenName },
        amount: maxAmount,
    } = token;

    const { validators } = useTokenAmountTextField({ maxAmount, decimals, tokenName });

    return (
        <BaseAssetAmountTextField
            validators={{ ...validators, ...validatorsProp }}
            maxDecimals={parseInt(decimals.toString(), 10)}
            units={tokenName}
            {...rest}
        />
    );
};

export default TokenAmountTextField;
