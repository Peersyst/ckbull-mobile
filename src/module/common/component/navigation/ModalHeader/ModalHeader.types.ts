export type ModalHeaderDismissal = "hide" | "close";

export interface ModalHeaderProps {
    title: string;
    dismissal: ModalHeaderDismissal;
    onDismiss: () => void;
    onBack?: () => void;
}
