import { ReactElement } from "react";
import { ActivityStatusLabel, ActivityTypography } from "module/activity/component/display/ActivityStatus/ActivityStatus.styles";
import { useTranslate } from "module/common/hook/useTranslate";
import { ConnectedSiteStatusType } from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";

export interface ActivityStatusProps {
    message: ConnectedSiteStatusType;
    statusColor: string;
    light?: boolean;
    children?: ReactElement;
}

const ActivityStatus = ({ message, light = false, children, statusColor }: ActivityStatusProps): JSX.Element => {
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
