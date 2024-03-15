/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-native-styled";
import { Theme as RNCTheme } from "@peersyst/react-native-components";

export interface ThemeOverlay {
    "80%": string;
    "72%": string;
    "60%": string;
    "48%": string;
    "32%": string;
    "24%": string;
    "16%": string;
    "12%": string;
    "8%": string;
    "6%": string;
}

export interface ThemeOverlays {
    100: ThemeOverlay;
    300: ThemeOverlay;
    500: ThemeOverlay;
    700: ThemeOverlay;
    900: ThemeOverlay;
}

export interface ThemeGreen {
    "200": string;
    "400": string;
    "600": string;
    "800": string;
}

export interface ThemeGray {
    "0": string;
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "450": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
}

export type ThemeGradient = [string, string];

// Custom components theme
declare module "@peersyst/react-native-components" {
    export interface Theme {
        borderRadiusSm: number;
        borderRadiusXs: number;
        borderWidth: number;
    }

    export interface CreateTheme {
        borderRadiusSm?: number;
        borderRadiusXs?: number;
        borderWidth?: number;
    }

    export interface ThemeGradients {
        greenDarkGreen: ThemeGradient;
        greenViolet: ThemeGradient;
    }

    export interface ThemePalette {
        secondary: string;
        white: string;
        black: string;
        gold: string;
        red: string;
        orange: string;
        purple: string;
        violet: string;
        blue: string;
        glass: string;
        green: ThemeGreen;
        gray: ThemeGray;
        gradient: ThemeGradients;
        overlay: ThemeOverlays;
        //Utils
        wallet: string[];
        component: {
            appbar: {
                backgroundColor: string;
                borderColor: string;
            };
            navbar: {
                borderColor: string;
            };
            bottomBar: {
                backgroundColor: string;
                borderColor: string;
            };
            paper: string;
            borderColor: string;
            label: string;
            input: {
                borderColor: string;
                placeholderColor: string;
                displayColor: string;
                backgroundColor: string;
                hintColor: string;
            };
        };
    }

    export interface TypographyVariantsOverrides {
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        h1Strong: true;
        h1Regular: true;
        h1Light: true;
        h2Strong: true;
        h2Regular: true;
        h2Light: true;
        title1Strong: true;
        title1Regular: true;
        title1Light: true;
        title2Strong: true;
        title2Regular: true;
        title2Light: true;
        title3Strong: true;
        title3Regular: true;
        title3Light: true;
        title4Strong: true;
        title4Regular: true;
        title4Light: true;
        title5Strong: true;
        title5Regular: true;
        title5Light: true;
        body1Strong: true;
        body1Regular: true;
        body1Light: true;
        body2Strong: true;
        body2Regular: true;
        body2Light: true;
        body3Strong: true;
        body3Regular: true;
        body3Light: true;
        body4Strong: true;
        body4Regular: true;
        body4Light: true;
    }

    export interface ButtonVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        outlined: true;
        text: true;
        glass: true;
        filled: true;
    }
}

// Type styled components theme with our components theme
declare module "@peersyst/react-native-styled" {
    export interface Theme extends RNCTheme {}
}
