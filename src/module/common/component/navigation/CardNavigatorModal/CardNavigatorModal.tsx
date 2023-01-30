import { ExposedBackdropProps } from "@peersyst/react-native-components";
import Navbar from "module/common/component/navigation/Navbar/Navbar";
import { NavbarProps } from "module/common/component/navigation/Navbar/Navbar.types";
import { ReactNode } from "react";
import CardModal from "module/common/component/navigation/CardModal/CardModal";

interface CardNavigatorModalProps extends ExposedBackdropProps {
    navbar?: NavbarProps;
    children: ReactNode;
}

const CardNavigatorModal = ({
    navbar: { back, action, onBack, onAction, ...restNavProps } = {},
    children,
    open,
    closable = true,
    onClose,
    ...backdropProps
}: CardNavigatorModalProps): JSX.Element => {
    return (
        <CardModal closable={closable} {...backdropProps} open={open}>
            {(open, setOpen) => ({
                header: (
                    <Navbar
                        back={back && !action && closable}
                        onBack={
                            onBack ||
                            (() => {
                                setOpen(false);
                                if (open !== undefined) onClose?.();
                            })
                        }
                        action={!back && closable ? action : undefined}
                        onAction={
                            onAction ||
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
