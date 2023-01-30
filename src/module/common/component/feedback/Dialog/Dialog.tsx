import { createModal } from "@peersyst/react-native-components";
import { DialogRoot, DialogTitle, DialogMessage, DialogOption } from "./Dialog.styles";
import { Col } from "@peersyst/react-native-components";
import { Pressable } from "react-native";
import { useState } from "react";
import { DialogProps, useMergeDefaultProps } from "@peersyst/react-components-core";

const Dialog = createModal((props: DialogProps): JSX.Element => {
    const { title, content, buttons, ...modalProps } = useMergeDefaultProps("Dialog", props);

    const [open, setOpen] = useState(true);

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <DialogRoot open={open} onClose={closeDialog} animationIn="fadeIn" animationOut="fadeOut" {...modalProps}>
            <Col justifyContent="center" gap={14}>
                <DialogTitle>{title}</DialogTitle>
                {typeof content === "string" ? <DialogMessage>{content}</DialogMessage> : content}
                <Col justifyContent="center" gap={20}>
                    {buttons?.map(({ text, type, action }, key) => (
                        <Pressable onPress={action || closeDialog} accessibilityRole="button" key={key}>
                            <DialogOption type={type}>{text}</DialogOption>
                        </Pressable>
                    )) || (
                        <Pressable onPress={closeDialog} accessibilityRole="button">
                            <DialogOption>OK</DialogOption>
                        </Pressable>
                    )}
                </Col>
            </Col>
        </DialogRoot>
    );
});

export default Dialog;
