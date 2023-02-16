import CardModal, { CardModalProps } from "module/common/component/navigation/CardModal/CardModal";
import { ReactElement } from "react";
import { ActionIconRoot, CardSelectModalNavbar } from "module/common/component/feedback/CardSelectModal/CardSelectModal.styles";
import { Typography } from "@peersyst/react-native-components";
import { ACTION_ICONS } from "module/common/component/feedback/CardSelectModal/ActionIcons";

export type CardSelectModalProps = Omit<CardModalProps, "children"> & {
    children: ReactElement;
    title: string;
    action: "hide" | "close";
};

const CardSelectModal = ({ children, title, action, onClose, ...rest }: CardSelectModalProps): JSX.Element => {
    const ActionIcon = ACTION_ICONS[action];

    return (
        <CardModal {...rest} onClose={onClose}>
            {(open, setOpen) => ({
                header: (
                    <CardSelectModalNavbar>
                        <Typography style={{ lineHeight: 30 }} variant="body1Light">
                            {title}
                        </Typography>
                        <ActionIconRoot>
                            <ActionIcon
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
