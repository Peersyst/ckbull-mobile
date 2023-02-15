import TextField from "../TextField/TextField";
import { NumericInput, NumericInputProps, TextFieldProps } from "@peersyst/react-native-components";
import config from "config/config";

export type NumericTextFieldProps = Omit<TextFieldProps, "input" | "keyboardType"> & {
    maxDecimals?: NumericInputProps["maxDecimals"];
};

const NumericTextField = ({ maxDecimals, ...props }: NumericTextFieldProps) => {
    return <TextField {...props} input={NumericInput} inputProps={{ maxDecimals: maxDecimals || config.defaultDecimals }} />;
};

export default NumericTextField;
