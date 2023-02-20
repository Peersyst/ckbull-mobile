import { CreateGlobalStyles } from "@peersyst/react-native-components";

const globalStyles: CreateGlobalStyles = ({ theme: { palette, typography } }) => ({
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
    FormControlLabel: {
        label: {
            ...typography.body3Regular,
            maxWidth: "100%",
        },
    },
    Label: {
        label: {
            color: palette.component.label,
            ...typography.body3Regular,
        },
    },
    Modal: {
        backgroundColor: palette.component.paper,
    },
    Paper: {
        backgroundColor: palette.component.paper,
    },
    SwipeButton: {
        height: 52,
        borderRadius: 52,
        backgroundGradient: {
            colors: palette.gradient.greenDarkGreen,
            start: { x: 0, y: 1 },
            end: { x: 1, y: 0 },
        },
        ...typography.body2Regular,
        color: palette.white,
        track: {
            padding: 6,
        },
        thumb: {
            backgroundColor: palette.white,
            color: palette.primary,
        },
        disabled: {
            backgroundGradient: {
                colors: [palette.disabled, palette.disabled],
            },
        },
    },
    Typography: {
        light: {
            color: palette.mode === "light" ? palette.gray[200] : palette.gray[600],
            opacity: 1,
        },
    },
});

export default globalStyles;
