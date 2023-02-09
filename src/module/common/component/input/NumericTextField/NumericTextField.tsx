import TextField from "../TextField/TextField";
import { NumericInput, NumericInputProps, TextFieldProps } from "@peersyst/react-native-components";

export type NumericTextFieldProps = Omit<TextFieldProps, "input" | "keyboardType"> & {
    maxDecimals?: NumericInputProps["maxDecimals"];
};

const NumericTextField = ({ maxDecimals, ...props }: NumericTextFieldProps) => {
    return <TextField {...props} input={NumericInput} inputProps={{ maxDecimals }} />;
};

export default NumericTextField;
