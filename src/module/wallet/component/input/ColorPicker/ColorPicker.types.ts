import { CoreFormControlledComponentProps, FormControlledComponentProps, LabelProps } from "@peersyst/react-native-components";

export type CoreColorPickerProps = Omit<CoreFormControlledComponentProps<string, LabelProps>, "showValid" | "showError" | "validation">;

export type ColoPickerProps = FormControlledComponentProps<CoreColorPickerProps>;
