/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-native-styled";
import { Theme as RNCTheme } from "@peersyst/react-native-components";

// Custom components theme
declare module "@peersyst/react-native-components" {
    export interface ThemePalette {
        white: string;
        black: string;
        darkGray: string;
        darkLightGray: string;
        darkerGray: string;
        darkGray2: string;
        darkLightGray2: string;
        fullBlack: string;
        gray: string;
        lightGray: string;
        lighterGray: string;
        darkFont: string;
        turquoise: string;
        gold: string;
        violet: string;
        pink: string;
        blue: string;
        purple: string;
        red: string;
        appbar: string;
        paper: string;
        wallet: string[];
    }

    export interface TypographyVariantsOverrides {
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
    }
}

// Type styled components theme with our components theme
declare module "@peersyst/react-native-styled" {
    export interface Theme extends RNCTheme {}
}