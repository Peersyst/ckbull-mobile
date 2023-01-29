import { ReactNode } from "react";
import { StepsProps } from "module/common/component/display/Steps/Steps";

export interface NavbarProps {
    back?: ReactNode;
    action?: "close" | "hide";
    onBack?: () => unknown;
    onAction?: () => void;
    title?: string;
    steps?: StepsProps;
}
