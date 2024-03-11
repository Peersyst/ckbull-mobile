import { ExposedBackdropProps } from "@peersyst/react-native-components";
import { ReactNode } from "react";

export type FiatOrderModalProps = ExposedBackdropProps & {
    title: string;
    order: ReactNode;
    success: ReactNode;
};

export enum FiatOrderModalTabs {
    NEW_ORDER,
    SUCCESS,
}
