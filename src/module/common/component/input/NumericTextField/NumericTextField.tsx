import TextField from "../TextField/TextField";
import { NumericInput, NumericInputProps, TextFieldProps } from "@peersyst/react-native-components";
import config from "config/config";

export type NumericTextFieldProps = Omit<TextFieldProps, "input" | "keyboardType"> & {
    maxDecimals?: NumericInputProps["maxDecimals"];
};

const NumericTextField = ({ maxDecimals, ...props }: NumericTextFieldProps) => {
    const showDefaultDecimals = maxDecimals === undefined;
    const finalDecimals = showDefaultDecimals ? config.defaultDecimals : maxDecimals;
    return <TextField {...props} input={NumericInput} inputProps={{ maxDecimals: finalDecimals }} />;
};

export default NumericTextField;
