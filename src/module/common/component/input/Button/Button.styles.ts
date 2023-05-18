import { Button, ButtonSize } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { ButtonProps } from "./Button.types";
import { darken, emphasize } from "@peersyst/react-utils";

export const BUTTON_SIZES: Record<ButtonSize, number> = {
    lg: 52,
    md: 44,
    sm: 36,
};

export const ButtonRoot = styled(Button)<ButtonProps>(({ theme, rounded = true }) => {
    return {
        borderRadius: rounded ? 10000 : theme.borderRadiusSm,
        //Size Styles
        lg: {
            ...theme.typography.body2Regular,
            height: BUTTON_SIZES.lg,
            paddingHorizontal: 18,
            paddingVertical: 12,
        },
        md: {
            ...theme.typography.body2Regular,
            height: BUTTON_SIZES.md,
            paddingHorizontal: 18,
            paddingVertical: 6,
        },
        sm: {
            ...theme.typography.body3Regular,
            height: BUTTON_SIZES.sm,
            paddingHorizontal: 16,
            paddingVertical: 8,
        },
        //Variant Styles
        primary: {
            backgroundGradient: {
                colors: theme.palette.gradient.greenDarkGreen,
                start: { x: 0, y: 1 },
                end: { x: 1, y: 0 },
            },
            color: theme.palette.white,
        },
        secondary: {
            color: theme.palette.gray[0],
            backgroundColor: theme.palette.gray[900],
        },
        tertiary: {
            backgroundColor: theme.palette.overlay[900]["12%"],
            color: theme.palette.gray[900],
        },
        outlined: {
            borderColor: theme.palette.overlay[900]["12%"],
            color: theme.palette.text,
        },
        text: {
            color: theme.palette.text,
        },
        glass: {
            backgroundColor: theme.palette.overlay[900]["32%"],
            color: theme.palette.white,
        },

        //State Styles
        pressed: {
            primary: {
                backgroundGradient: {
                    colors: [
                        darken(theme.palette.gradient.greenDarkGreen[0], 0.15),
                        darken(theme.palette.gradient.greenDarkGreen[1], 0.15),
                    ],
                },
            },
            secondary: {
                backgroundColor: emphasize(theme.palette.gray[900], 0.1),
            },
            tertiary: {
                backgroundColor: theme.palette.overlay[100]["24%"],
            },
            outlined: {
                backgroundColor: theme.palette.overlay[100]["8%"],
            },
            glass: {
                backgroundColor: darken(theme.palette.overlay[900]["32%"], 0.1),
            },
        },
        disabled: {
            color: "white",

            outlined: {
                backgroundColor: "transparent",
                color: theme.palette.overlay[100]["24%"],
                borderColor: theme.palette.overlay[100]["24%"],
            },
            primary: {
                backgroundGradient: { colors: [theme.palette.overlay[900]["12%"], theme.palette.overlay[900]["12%"]] },
                color: theme.palette.overlay[100]["48%"],
            },
        },
    };
});
