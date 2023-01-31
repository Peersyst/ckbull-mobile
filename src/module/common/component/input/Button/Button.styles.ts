import { Button } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import { ButtonProps } from "./Button.types";
import { emphasize } from "@peersyst/react-utils";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonBase = styled(Button)<ButtonProps>(({ theme, rounded = true }) => {
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
                backgroundColor: "transparent",
                color: theme.palette.white,
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
                color: theme.palette.white,
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
            backgroundColor: theme.palette.overlay[100]["12%"],
            color: "white",
            variant: {
                outlined: {
                    backgroundColor: "transparent",
                    color: theme.palette.overlay[100]["24%"],
                    borderColor: theme.palette.overlay[100]["24%"],
                },
                primary: {
                    backgroundColor: theme.palette.overlay[900]["12%"],
                    color: theme.palette.overlay[100]["48%"],
                },
            },
        },
    };
});

export const ButtonRoot = styled(View)(() => ({}));

export const ButtonGradient = styled(LinearGradient)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    elevation: -1,
    width: "100%",
    height: "100%",
}));
