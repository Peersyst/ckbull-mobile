import "react-i18next";
import { defaultNS, resources } from "./i18n";

export type LocaleType = "es" | "en" | "zh";
export type NameSpacesType = "translation" | "error";
export type ResourceType = typeof resources["en"];
export type ErrorResourceType = keyof ResourceType["error"];

declare module "react-i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: ResourceType;
    }
}
