import useGetBalance from "module/wallet/query/useGetBalance";
import { config } from "config";
import BaseAssetAmountTextField from "../BaseAssetAmountTextField/BaseAssetAmountTextField";
import { NumericTextFieldProps } from "module/common/component/input/NumericTextField/NumericTextField";
import { useCKBAmountTextField } from "./hook/useCKBAmountTextField";

export interface CKBAmountTextFieldProps extends Omit<NumericTextFieldProps, "maxDecimals"> {
    index?: number;
    maxAmount?: string;
    minAmount?: string;
    fee?: string;
}

const CKBAmountTextField = ({ index, maxAmount, minAmount, validators: validatorsProp, fee, ...rest }: CKBAmountTextFieldProps) => {
    const { isLoading } = useGetBalance(index);
    const { validators } = useCKBAmountTextField({ maxAmount, minAmount, fee, walletIndex: index });

    return (
        <BaseAssetAmountTextField
            validators={{ ...validators, ...validatorsProp }}
            maxDecimals={config.defaultDecimals}
            loading={isLoading}
            units={config.tokenName}
            {...rest}
        />
    );
};

export default CKBAmountTextField;
