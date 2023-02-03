import { CreateGlobalStyles } from "@peersyst/react-native-components";

const globalStyles: CreateGlobalStyles = ({ theme: { palette } }) => ({
    Dialog: {
        title: {
            textAlign: "center",
        },
        content: {
            textAlign: "center",
            paddingBottom: 24,
            color: palette.gray[700],
        },
    },
    Divider: {
        backgroundColor: palette.component.borderColor,
    },
    DottedPagination: {
        gap: 6,
        dot: {
            width: 8,
            height: 8,
            backgroundColor: "rgba(38, 38, 38, 0.08)",
            active: {
                backgroundColor: palette.primary,
            },
        },
    },
    FormControlHint: {
        fontSize: 14,
        color: palette.gray[300],
    },
    FormControlError: {
        fontSize: 14,
    },
    Label: {
        label: {
            color: palette.component.label,
        },
    },
    Paper: {
        backgroundColor: palette.component.paper,
    },
    Typography: {
        light: {
            color: palette.gray[200],
            opacity: 1,
        },
    },
});

export default globalStyles;
