import styled from "@peersyst/react-native-styled";
import { TextArea } from "@peersyst/react-native-components";

export const TextAreaRoot = styled(TextArea)(({ theme }) => ({
    component: {
        borderRadius: theme.borderRadiusSm,
        backgroundColor: theme.palette.background,
        color: theme.palette.component.input.displayColor,
        borderWidth: theme.borderWidth,
        borderStyle: "solid",
        borderColor: theme.palette.component.input.borderColor,
        paddingHorizontal: 20,
        input: {
            ...theme.typography.body2Strong,
            placeholderColor: theme.palette.component.input.placeholderColor,
            highlightColor: theme.palette.primary,
        },
    },
}));
