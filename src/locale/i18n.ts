import i18next from "i18next";
import { initReactI18next } from "react-i18next";

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

export const i18nexInitializationPromise = i18next
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
