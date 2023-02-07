import { StepsProps } from "module/common/component/display/Steps/Steps";

export interface NavbarProps {
    back?: boolean;
    onBack?: () => unknown;
    title?: string;
    steps?: StepsProps;
}
