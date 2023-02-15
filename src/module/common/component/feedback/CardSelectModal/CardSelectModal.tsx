import CardModal, { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";
import { ReactElement } from "react";
import ModalHeader from "../../navigation/ModalHeader/ModalHeader";
import { ModalHeaderDismissal } from "../../navigation/ModalHeader/ModalHeader.types";

export type CardSelectModalProps = Omit<CardModalProps, "children"> & {
    children: ReactElement;
    title: string;
    dismissal: ModalHeaderDismissal;
};

const CardSelectModal = ({ children, title, dismissal, onClose, ...rest }: CardSelectModalProps): JSX.Element => {
    return (
        <CardModal {...rest} onClose={onClose}>
            {(open, setOpen) => ({
                header: (
                    <ModalHeader
                        title={title}
                        dismissal={dismissal}
                        onDismiss={() => {
                            setOpen(false);
                            if (open !== undefined) onClose?.();
                        }}
                    />
                ),
                body: children,
            })}
        </CardModal>
    );
};

export default CardSelectModal;
