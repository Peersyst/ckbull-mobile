import { ReactNode } from "react";
import { ThemeFonts, TypographyVariants, TypographyVariantsOverrides } from "../../style/theme.types";
import { OverridableStringUnion } from "@peersyst/react-types";
import { TextProps, TextStyle } from "react-native";

export interface TypographyProps extends TextProps {
    /**
     * Typography variant
     */
    variant: OverridableStringUnion<TypographyVariants, TypographyVariantsOverrides>;
    /**
     * Typography font
     */
    font?: keyof ThemeFonts;
    /**
     * Text transform css property
     */
    textTransform?: TextStyle["textTransform"];
    /**
     * Font style css property
     */
    fontStyle?: TextStyle["fontStyle"];
    /**
     * Text align css property
     */
    textAlign?: TextStyle["textAlign"];
    /**
     * Font weight css property
     */
    fontWeight?: TextStyle["fontWeight"];
    /**
     * Number of lines
     */
    numberOfLines?: number;
    /**
     * Text is light
     */
    light?: boolean;
    /**
     * Typography style
     */
    style?: TextStyle;
    /**
     * Text content
     */
    children?: ReactNode;
}

export interface TypographyStyleProps {
    font?: keyof ThemeFonts;
    textTransform?: TextStyle["textTransform"];
    fontStyle?: TextStyle["fontStyle"];
    textAlign?: TextStyle["textAlign"];
    fontWeight?: TextStyle["fontWeight"];
    light?: boolean;
    variantStyles: TextStyle;
}
