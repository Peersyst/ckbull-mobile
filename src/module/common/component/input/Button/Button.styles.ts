import { Button } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { ButtonProps } from "./Button.types";
import { emphasize } from "@peersyst/react-utils";

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
            height: 40,
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
                backgroundColor: theme.palette.primary,
                color: theme.palette.gray[900],
            },
            secondary: {
                backgroundColor: theme.palette.gray[900],
                color: theme.palette.black,
            },
            tertiary: {
                backgroundColor: theme.palette.overlay[900]["12%"],
                color: theme.palette.gray[900],
            },
            outlined: {
                borderColor: theme.palette.text,
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
                    backgroundColor: emphasize(theme.palette.primary, 0.15),
                },
                secondary: {
                    backgroundColor: emphasize(theme.palette.black, 0.02),
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
            backgroundColor: theme.palette.overlay[100]["24%"],
            color: "white",
            variant: {
                outlined: {
                    backgroundColor: "transparent",
                    color: theme.palette.overlay[100]["24%"],
                    borderColor: theme.palette.overlay[100]["24%"],
                },
            },
        },
    };
});
