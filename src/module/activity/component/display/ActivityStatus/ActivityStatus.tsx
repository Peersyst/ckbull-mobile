import { ReactElement } from "react";
import { ActivityStatusLabel, ActivityTypography } from "module/activity/component/display/ActivityStatus/ActivityStatus.styles";
import { useTranslate } from "module/common/hook/useTranslate";

export type StatusState = "connected" | "disconnected" | "pending" | "failed";

export interface ActivityStatusProps {
    message: StatusState;
    statusColor: string;
    light: boolean;
    children?: ReactElement;
}

const ActivityStatus = ({ message, light, children, statusColor }: ActivityStatusProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <>
            {light ? (
                <ActivityTypography variant="body4Light" light>
                    {translate(message)}
                </ActivityTypography>
            ) : (
                <ActivityStatusLabel variant="body4Light" statusColor={statusColor}>
                    {translate(message)}
                </ActivityStatusLabel>
            )}
            {children}
        </>
    );
};

export default ActivityStatus;
