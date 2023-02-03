import { Col, Row, Typography } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import { ActivityCardRoot } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import { ChevronRightIcon } from "icons";
import Balance from "module/wallet/component/display/Balance/Balance";

interface ActivityCardProps {
    display: ReactElement;
    title: string;
    description: string;
    amount?: string | number;
    details?: string;
    actionElement?: ReactElement;
    onAction?: () => void;
    style?: ViewStyle & { title?: TextStyle; description?: TextStyle; details?: TextStyle };
}

const ActivityCard = ({
    display,
    title,
    description,
    details,
    amount,
    actionElement,
    onAction,
    style: { title: titleStyle = {}, details: detailsStyle = {}, description: descriptionStyle = {}, ...rotStyle } = {},
}: ActivityCardProps): JSX.Element => {
    return (
        <ActivityCardRoot style={rotStyle}>
            <Row gap={16}>
                {display}
                <Col gap={4} justifyContent="center">
                    <Typography variant="body3Regular" style={titleStyle}>
                        {title}
                    </Typography>
                    <Typography variant="body4Light" style={descriptionStyle} light={!descriptionStyle.color}>
                        {description}
                    </Typography>
                    <Typography variant="body4Strong" light style={detailsStyle}>
                        {details}
                    </Typography>
                </Col>
            </Row>
            {amount && <Balance balance={amount} variant="body3Strong" units="token" />}
            {onAction && (
                <Col justifyContent="center" alignItems="center">
                    <Pressable accessibilityRole="button" onPress={onAction}>
                        {actionElement || <ChevronRightIcon />}
                    </Pressable>
                </Col>
            )}
        </ActivityCardRoot>
    );
};

export default ActivityCard;
