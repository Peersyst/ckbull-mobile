import { CreateTheme } from "@peersyst/react-native-components";
import { Platform, TextStyle } from "react-native";

export type FontWeight = "strong" | "regular" | "light";

export type TypographyVariant = "h1" | "h2" | "title1" | "title2" | "title3" | "title4" | "title5" | "body1" | "body2" | "body3" | "body4";

export const ACTIVE_GROTESK: Record<FontWeight, string> = {
    light: "AktivGrotesk_Regular",
    regular: "AktivGrotesk_Medium",
    strong: "AktivGrotesk_Bold",
};

export const DRUK_TEXT_WIDE: Record<FontWeight, string> = {
    light: "DrukTextWide_Heavy",
    regular: "DrukTextWide_Heavy",
    strong: "DrukTextWide_Heavy",
};

export const FONT_STYLE: Record<TypographyVariant, TextStyle> = {
    h1: { fontSize: 28, lineHeight: 36 },
    h2: { fontSize: 20, lineHeight: 24 },
    title1: { fontSize: 32, lineHeight: 36 },
    title2: { fontSize: 28, lineHeight: 32 },
    title3: { fontSize: 24, lineHeight: 30 },
    title4: { fontSize: 22, lineHeight: 28 },
    title5: { fontSize: 20, lineHeight: 26 },
    body1: { fontSize: 18, lineHeight: 24 },
    body2: { fontSize: 16, lineHeight: 22 },
    body3: { fontSize: 14, lineHeight: 20 },
    body4: { fontSize: 12, lineHeight: 18 },
};

export function isHeading(variant: TypographyVariant): boolean {
    return variant.indexOf("h") === 0;
}
export function getFontFamily(variant: TypographyVariant, fontWeight: FontWeight): string {
    return isHeading(variant) ? DRUK_TEXT_WIDE[fontWeight] : ACTIVE_GROTESK[fontWeight];
}
export function getMarginBottom(variant: TypographyVariant): number {
    return !isHeading(variant) && Platform.OS === "ios" ? -3 : 0;
}

export function createTypographyVariant(typographyVariant: TypographyVariant, fontWeight: FontWeight, style: TextStyle = {}): TextStyle {
    const fontStyle = FONT_STYLE[typographyVariant] || {};
    return {
        lineHeight: fontStyle.fontSize! * 1.2,
        ...fontStyle,
        fontFamily: getFontFamily(typographyVariant, fontWeight),
        marginBottom: getMarginBottom(typographyVariant),
        ...style,
    };
}

const typography: CreateTheme["typography"] = {
    // CKBULL
    h1: {
        fontSize: 22,
    },
    h2: {
        fontSize: 18,
    },
    h3: {
        fontFamily: "AktivGrotesk_Regular",
        fontSize: 16,
    },
    body1: {
        fontFamily: "AktivGrotesk_Medium",
    },
    body2: {
        fontFamily: "AktivGrotesk_Regular",
    },
    //Druk Text Wide Web
    h1Strong: createTypographyVariant("h1", "strong"),
    h1Regular: createTypographyVariant("h1", "regular"),
    h1Light: createTypographyVariant("h1", "light"),
    h2Strong: createTypographyVariant("h2", "strong"),
    h2Regular: createTypographyVariant("h2", "regular"),
    h2Light: createTypographyVariant("h2", "light"),

    // Activ Grotesk
    title1Strong: createTypographyVariant("title1", "strong"),
    title1Regular: createTypographyVariant("title1", "regular"),
    title1Light: createTypographyVariant("title1", "light"),
    title2Strong: createTypographyVariant("title2", "strong"),
    title2Regular: createTypographyVariant("title2", "regular"),
    title2Light: createTypographyVariant("title2", "light"),
    title3Strong: createTypographyVariant("title3", "strong"),
    title3Regular: createTypographyVariant("title3", "regular"),
    title3Light: createTypographyVariant("title3", "light"),
    title4Strong: createTypographyVariant("title4", "strong"),
    title4Regular: createTypographyVariant("title4", "regular"),
    title4Light: createTypographyVariant("title4", "light"),
    title5Strong: createTypographyVariant("title5", "strong"),
    title5Regular: createTypographyVariant("title5", "regular"),
    title5Light: createTypographyVariant("title5", "light"),
    body1Strong: createTypographyVariant("body1", "strong"),
    body1Regular: createTypographyVariant("body1", "regular"),
    body1Light: createTypographyVariant("body1", "light"),
    body2Strong: createTypographyVariant("body2", "strong"),
    body2Regular: createTypographyVariant("body2", "regular"),
    body2Light: createTypographyVariant("body2", "light"),
    body3Strong: createTypographyVariant("body3", "strong"),
    body3Regular: createTypographyVariant("body3", "regular"),
    body3Light: createTypographyVariant("body3", "light"),
    body4Strong: createTypographyVariant("body4", "strong"),
    body4Regular: createTypographyVariant("body4", "regular"),
    body4Light: createTypographyVariant("body4", "light"),
};

export default typography;
