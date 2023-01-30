import CardModal, { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";
import { ReactElement } from "react";
import { ChevronUpIcon } from "icons";
import { ActionIconRoot, CardSelectModalNavbar } from "module/common/component/feedback/CardSelectModal/CardSelectModal.styles";
import { Typography } from "@peersyst/react-native-components";

export type CardSelectModalProps = Omit<CardModalProps, "children"> & {
    children: ReactElement;
    title: string;
    action: "hide" | "close";
};

const CardSelectModal = ({ children, title, onClose, ...rest }: CardSelectModalProps): JSX.Element => {
    return (
        <CardModal {...rest} onClose={onClose}>
            {(open, setOpen) => ({
                header: (
                    <CardSelectModalNavbar>
                        <Typography style={{ lineHeight: 30 }} variant="body1Light" textTransform="uppercase">
                            {title}
                        </Typography>
                        <ActionIconRoot>
                            <ChevronUpIcon
                                onPress={() => {
                                    setOpen(false);
                                    if (open !== undefined) onClose?.();
                                }}
                            />
                        </ActionIconRoot>
                    </CardSelectModalNavbar>
                ),
                body: children,
            })}
        </CardModal>
    );
};

export default CardSelectModal;
