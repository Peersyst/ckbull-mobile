import { Col, Row } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import ActivityAction, { ActivityActionProps } from "module/activity/core/ActivityAction/ActivityAction";
import { ActivityCardRoot } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { ActivityTypography } from "module/activity/component/display/ActivityStatus/ActivityStatus.styles";

interface ActivityCardProps extends ActivityActionProps {
    children: { header?: ReactElement; description?: ReactElement; content?: ReactElement };
    title: string;
}

const ActivityCard = ({ children: { header, description, content }, title, action, onAction }: ActivityCardProps): JSX.Element => {
    return (
        <ActivityCardRoot>
            <Row gap={16}>
                {header}
                <Col justifyContent="center">
                    <ActivityTypography variant="body3Regular">{title}</ActivityTypography>
                    {description}
                </Col>
            </Row>
            <Row>{content}</Row>
            <Col justifyContent="center" alignItems="center">
                <ActivityAction action={action} onAction={onAction} />
            </Col>
        </ActivityCardRoot>
    );
};

export default ActivityCard;
