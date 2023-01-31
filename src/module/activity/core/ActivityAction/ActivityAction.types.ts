import { ArrowIcon } from "icons";

export enum ActivityActionKind {
    "DISCONNECT",
    "SIGN",
}

export interface Action {
    label?: string;
    Icon?: typeof ArrowIcon;
}

export type ActivityAction = Record<ActivityActionKind, Action>;
