import { LabeledIconButtonProps } from "../LabeledIconButton/LabeledIconButton.types";

export interface ActionIconButtonProps extends Omit<LabeledIconButtonProps, "labelColor" | "onPress" | "type" | "action"> {
    action: LabeledIconButtonProps["onPress"];
    isActive?: boolean;
}
