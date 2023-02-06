import { Col, Row, Typography } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import { ActivityCardRoot, ActivityDisplay, DefaultActivityAction, Details } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import { placeholder_image } from "images";

interface ActivityCardProps {
    imageUrl: string;
    title: string;
    description: string;
    amount?: number | ReactElement;
    details?: string;
    actionElement?: ReactElement;
    onAction?: () => void;
    style?: ViewStyle & { title?: TextStyle; description?: TextStyle; details?: TextStyle };
}

const ActivityCard = ({
    imageUrl,
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
                <ActivityDisplay source={imageUrl ? { uri: imageUrl } : placeholder_image} />
                <Col gap={4} justifyContent="center">
                    <Typography variant="body3Regular" style={titleStyle}>
                        {title}
                    </Typography>
                    <Typography variant="body4Light" style={descriptionStyle} light={!descriptionStyle.color}>
                        {description}
                    </Typography>
                    <Details variant="body4Strong" style={detailsStyle}>
                        {details}
                    </Details>
                </Col>
            </Row>
            {amount}
            {onAction && (
                <Col justifyContent="center" alignItems="center">
                    <Pressable accessibilityRole="button" onPress={onAction}>
                        {actionElement || <DefaultActivityAction />}
                    </Pressable>
                </Col>
            )}
        </ActivityCardRoot>
    );
};

export default ActivityCard;
