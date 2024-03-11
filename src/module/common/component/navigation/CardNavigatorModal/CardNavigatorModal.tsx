import Navbar from "module/common/component/navigation/Navbar/Navbar";
import { NavbarProps } from "module/common/component/navigation/Navbar/Navbar.types";
import { ReactNode } from "react";
import CardModal, { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";

export interface CardNavigatorModalProps extends Omit<CardModalProps, "children"> {
    navbar?: NavbarProps;
    children: ReactNode;
}

const CardNavigatorModal = ({
    navbar: { back, onBack, ...restNavProps } = {},
    children,
    open,
    closable = true,
    onClose,
    ...backdropProps
}: CardNavigatorModalProps): JSX.Element => {
    return (
        <CardModal closable={closable} onClose={onClose} {...backdropProps} open={open}>
            {(open, setOpen) => ({
                header: (
                    <Navbar
                        back={back && closable}
                        onBack={
                            onBack ||
                            (() => {
                                setOpen(false);
                                if (open !== undefined) onClose?.();
                            })
                        }
                        {...restNavProps}
                    />
                ),
                body: children,
            })}
        </CardModal>
    );
};

export default CardNavigatorModal;
