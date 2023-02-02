import { Col, Row, Typography } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import { ActivityCardRoot } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import { ChevronRightIcon } from "icons";

interface ActivityCardProps {
    display: ReactElement;
    title: string;
    description: string;
    amount?: string;
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
    style = { title: {}, details: {}, description: {} },
}: ActivityCardProps): JSX.Element => {
    return (
        <ActivityCardRoot>
            <Row gap={16}>
                {display}
                <Col gap={4} justifyContent="center">
                    <Typography variant="body3Regular" style={style?.title}>
                        {title}
                    </Typography>
                    <Typography variant="body4Light" style={style?.description} light={!style}>
                        {description}
                    </Typography>
                    <Typography variant="body4Strong" light style={style?.details}>
                        {details}
                    </Typography>
                </Col>
            </Row>
            {amount && <Typography variant="body4Strong">{amount}</Typography>}
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
