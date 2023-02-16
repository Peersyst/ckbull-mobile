import { ChevronDownIcon, CircleErrorIcon } from "icons";
import { ModalHeaderDismissal } from "./ModalHeader.types";

export const DISMISSAL_ICONS: Record<ModalHeaderDismissal, typeof ChevronDownIcon> = {
    hide: ChevronDownIcon,
    close: CircleErrorIcon,
};
