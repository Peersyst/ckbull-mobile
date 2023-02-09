import { Spinner, Typography } from "@peersyst/react-native-components";

import NumericTextField, { NumericTextFieldProps } from "module/common/component/input/NumericTextField/NumericTextField";

export type BaseAssetAmountTextFieldProps = NumericTextFieldProps & {
    loading?: boolean;
    units: string;
};

const BaseAssetAmountTextField = ({ loading = false, units, disabled, suffix, ...rest }: BaseAssetAmountTextFieldProps) => {
    const finalSuffix = suffix || (loading ? <Spinner size="small" /> : <Typography variant="body4Strong">{units}</Typography>);
    return <NumericTextField disabled={loading || disabled} suffix={finalSuffix} {...rest} />;
};

export default BaseAssetAmountTextField;
