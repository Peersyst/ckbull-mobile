import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Polyfill Intl as it is not included in RN
import "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/es";
import "intl/locale-data/jsonp/zh";
import "intl/locale-data/jsonp/pt";
import "intl/locale-data/jsonp/fr";
import "intl/locale-data/jsonp/el";
import LanguageDetectorPlugin from "./pluguins/LanguageDetectorPlugin/LanguageDetectorPlugin";
import { el, fr, pt, en, es, zh } from "./locales";

export const defaultNS = "translation";

export const resources = {
    en,
    es,
    zh,
    el,
    pt,
    fr,
} as const;

i18next
    .use(initReactI18next)
    .use(LanguageDetectorPlugin)
    .init({
        compatibilityJSON: "v3",
        fallbackLng: "en",
        resources,
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        returnNull: false,
    });

export default i18next;
