import { Backdrop, Col, createModal, ModalProps, PressableText, Row, Typography } from "react-native-components";
import { translate } from "locale";
import { useState } from "react";
import Glass from "module/common/component/surface/Glass/Glass";
import { BackIconRoot } from "module/common/component/feedback/GlassModal/GlassModal.styles";
import { BackIcon } from "icons";

export interface GlassModalProps extends ModalProps {
    title: string;
    cancel?: boolean;
    onCancel?: () => any;
    onBack?: () => any;
    onSave?: () => any;
    saveEnabled?: boolean;
}

const GlassModal = createModal(
    ({
        title,
        cancel = true,
        onCancel,
        onBack,
        onSave,
        saveEnabled = true,
        closable = true,
        onClose,
        children,
        style,
        ...backdropProps
    }: GlassModalProps): JSX.Element => {
        const [open, setOpen] = useState(true);

        const handleClose = async (saved: boolean) => {
            if (onSave && saved) {
                await onSave();
            } else onCancel?.();
            setOpen(false);
            onClose?.();
        };

        return (
            <Backdrop closable={closable} open={open} onClose={() => handleClose(false)} {...backdropProps}>
                <Glass style={style}>
                    <Col gap={20}>
                        <Row justifyContent="space-between" alignItems="center">
                            {!onBack ? (
                                <PressableText
                                    variant="body2"
                                    disabled={!closable}
                                    onPress={cancel ? () => handleClose(false) : undefined}
                                    style={cancel ? undefined : { opacity: 0 }}
                                >
                                    {translate("cancel")}
                                </PressableText>
                            ) : (
                                <BackIconRoot onPress={onBack}>
                                    <BackIcon />
                                </BackIconRoot>
                            )}
                            <Typography variant="h3" fontWeight="bold">
                                {title}
                            </Typography>
                            <PressableText
                                variant="body2"
                                disabled={!saveEnabled}
                                onPress={onSave ? () => handleClose(true) : undefined}
                                style={onSave ? undefined : { opacity: 0 }}
                            >
                                {translate("save")}
                            </PressableText>
                        </Row>
                        {children}
                    </Col>
                </Glass>
            </Backdrop>
        );
    },
);

export default GlassModal;
