import TextField from "../TextField/TextField";
import { TextFieldProps, useNumericInput } from "@peersyst/react-native-components";
import config from "config/config";

export type NumericTextFieldProps = Omit<TextFieldProps, "input" | "keyboardType"> & {
    maxDecimals?: number;
};

const NumericTextField = ({ maxDecimals, ...props }: NumericTextFieldProps) => {
    const showDefaultDecimals = maxDecimals === undefined;
    const finalDecimals = showDefaultDecimals ? config.defaultDecimals : maxDecimals;
    const { format, parse } = useNumericInput({ maxDecimals: finalDecimals });
    return <TextField format={format} parse={parse} {...props} keyboardType="numeric" />;
};

export default NumericTextField;
