import { ButtonProps } from "module/common/component/input/Button/Button.types";
import { ReactElement } from "react";
import { IconButtonRoot } from "./IconButton.styles";

export interface IconButtonProps extends Omit<ButtonProps, "children" | "rounded" | "leftIcon" | "rightIcon"> {
    icon: ReactElement;
}

const IconButton = ({ icon, ...buttonProps }: IconButtonProps): JSX.Element => <IconButtonRoot {...buttonProps}>{icon}</IconButtonRoot>;

export default IconButton;
