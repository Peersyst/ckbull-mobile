import styled from "@peersyst/react-native-styled";
import { TextField } from "@peersyst/react-native-components";
import { InputStyle } from "@peersyst/react-native-components";

export type TextFieldSize = "md" | "lg";

export interface TextFieldRootProps {
    size?: TextFieldSize;
}

export const TextFieldRoot = styled(TextField)<TextFieldRootProps>(({ theme, size = "lg" }) => {
    const inputSizeStyles: Record<TextFieldSize, InputStyle> = {
        md: {
            height: 45,
            ...theme.typography.body3Light,
        },
        lg: {
            height: 60,
            ...theme.typography.body2Light,
        },
    };

    return {
        component: {
            input: {
                ...inputSizeStyles[size],
                placeholderColor: theme.palette.component.input.placeholderColor,
                highlightColor: theme.palette.primary,
            },
            borderRadius: theme.borderRadiusSm,
            backgroundColor: theme.palette.component.input.backgroundColor,
            color: theme.palette.component.input.displayColor,
            borderWidth: theme.borderWidth,
            borderStyle: "solid",
            borderColor: theme.palette.component.input.borderColor,
            paddingHorizontal: 20,
        },
    };
});
