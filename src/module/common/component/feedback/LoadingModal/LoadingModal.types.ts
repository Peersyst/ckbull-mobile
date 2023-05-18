import { ExposedBackdropProps } from "@peersyst/react-native-components";
import { ReactElement } from "react";

export interface LoadingModalProps extends Omit<ExposedBackdropProps, "closable" | "animationIn" | "animationOut"> {
    loading: boolean;
    success: boolean;
    successMessage?: string;
    successDetails?: ReactElement;
    error: boolean;
}
