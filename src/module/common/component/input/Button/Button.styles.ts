import { Button } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { ButtonProps } from "./Button.types";
import { darken, emphasize } from "@peersyst/react-utils";

export const ButtonRoot = styled(Button)<ButtonProps>(({ theme, rounded = true }) => {
    return {
        borderRadius: rounded ? 10000 : undefined,
        //Size Styles
        lg: {
            ...theme.typography.body2Regular,
            height: 52,
            paddingHorizontal: 18,
            paddingVertical: 12,
        },
        md: {
            ...theme.typography.body2Regular,
            height: 44,
            paddingHorizontal: 18,
            paddingVertical: 6,
        },
        sm: {
            ...theme.typography.body3Regular,
            height: 36,
            paddingHorizontal: 16,
            paddingVertical: 8,
        },
        //Variant Styles
        variant: {
            primary: {
                gradient: {
                    colors: [theme.palette.green[200], theme.palette.green[800]],
                    start: { x: 0, y: 1 },
                    end: { x: 1, y: 0 },
                },
                color: theme.palette.white,
            },
            secondary: {
                backgroundColor: theme.palette.gray[900],
                color: theme.palette.gray[0],
            },
            tertiary: {
                backgroundColor: theme.palette.overlay[900]["12%"],
                color: theme.palette.gray[900],
            },
            outlined: {
                borderColor: theme.palette.overlay[100]["12%"],
                color: theme.palette.text,
            },
            text: {
                color: theme.palette.text,
            },
        },
        //State Styles
        pressed: {
            variant: {
                primary: {
                    gradient: {
                        colors: [darken(theme.palette.green[200], 0.15), darken(theme.palette.green[800], 0.15)],
                    },
                },
                secondary: {
                    backgroundColor: emphasize(theme.palette.gray[900], 0.02),
                },
                tertiary: {
                    backgroundColor: theme.palette.overlay[100]["24%"],
                },
                outlined: {
                    backgroundColor: theme.palette.overlay[100]["8%"],
                },
            },
        },
        disabled: {
            color: "white",
            variant: {
                outlined: {
                    backgroundColor: "transparent",
                    color: theme.palette.overlay[100]["24%"],
                    borderColor: theme.palette.overlay[100]["24%"],
                },
                primary: {
                    gradient: { colors: [theme.palette.overlay[900]["12%"], theme.palette.overlay[900]["12%"]] },
                    color: theme.palette.overlay[100]["48%"],
                },
            },
        },
    };
});
