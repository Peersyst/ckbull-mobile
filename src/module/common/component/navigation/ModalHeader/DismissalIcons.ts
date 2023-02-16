import { ChevronDownIcon, ChevronUpIcon, CircleErrorIcon } from "icons";
import { ModalHeaderDismissal } from "./ModalHeader.types";

export const DISMISSAL_ICONS: Record<ModalHeaderDismissal, typeof ChevronDownIcon> = {
    hide: ChevronUpIcon,
    close: CircleErrorIcon,
};
