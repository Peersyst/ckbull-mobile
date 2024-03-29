import styled from "@peersyst/react-native-styled";
import { TextArea } from "@peersyst/react-native-components";

export const TextAreaRoot = styled(TextArea)(({ theme }) => ({
    hint: {
        color: theme.palette.component.input.hintColor,
    },
    component: {
        borderRadius: theme.borderRadiusSm,
        backgroundColor: theme.palette.component.input.backgroundColor,
        color: theme.palette.component.input.displayColor,
        borderWidth: theme.borderWidth,
        borderStyle: "solid",
        borderColor: theme.palette.component.input.borderColor,
        paddingHorizontal: 20,
        input: {
            ...theme.typography.body2Light,
            placeholderColor: theme.palette.component.input.placeholderColor,
            highlightColor: theme.palette.primary,
        },
    },
}));
