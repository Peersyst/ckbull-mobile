import { Col, Row, Typography } from "@peersyst/react-native-components";
import { BackIcon } from "icons";
import { DISMISSAL_ICONS } from "./DismissalIcons";
import { BackIconButton, DismissalIconButton, ModalHeaderRoot } from "./ModalHeader.styles";
import { ModalHeaderProps } from "./ModalHeader.types";

const ModalHeader = ({ title, dismissal, onDismiss, onBack }: ModalHeaderProps) => {
    const DismissalIcon = DISMISSAL_ICONS[dismissal];

    return (
        <ModalHeaderRoot>
            <Col gap={24}>
                <Row alignItems="center" justifyContent="center">
                    {onBack && (
                        <BackIconButton onPress={onBack}>
                            <BackIcon />
                        </BackIconButton>
                    )}
                    <Typography variant="body1Light">{title}</Typography>
                    <DismissalIconButton onPress={onDismiss}>
                        <DismissalIcon />
                    </DismissalIconButton>
                </Row>
            </Col>
        </ModalHeaderRoot>
    );
};

export default ModalHeader;
