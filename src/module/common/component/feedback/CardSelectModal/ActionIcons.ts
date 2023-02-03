import { ChevronDownIcon, CircleErrorIcon } from "icons";

export type CardSelectModalAction = "hide" | "close";

export const ACTION_ICONS: Record<CardSelectModalAction, typeof ChevronDownIcon> = {
    hide: ChevronDownIcon,
    close: CircleErrorIcon,
};
