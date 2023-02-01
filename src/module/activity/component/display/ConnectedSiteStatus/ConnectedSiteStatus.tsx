import { useTheme } from "@peersyst/react-native-styled";
import ActivityStatus from "module/activity/component/display/ActivityStatus/ActivityStatus";
import { ActivityTypography } from "module/activity/component/display/ActivityStatus/ActivityStatus.styles";

export type ConnectedSiteStatus = "connected" | "disconnected" | "pending" | "failed";

export interface ConnectedSiteStatusProps {
    status: ConnectedSiteStatus;
    details?: string;
}

const ConnectedSiteStatus = ({ status, details }: ConnectedSiteStatusProps): JSX.Element => {
    const theme = useTheme();

    const handleStatusColor = (status: ConnectedSiteStatus): string => {
        switch (status) {
            case "connected":
                return theme.palette.green[200];
            case "disconnected":
                return theme.palette.red;
            case "failed":
                return theme.palette.red;
            default:
                return theme.palette.text;
        }
    };

    return (
        <ActivityStatus message={status} statusColor={handleStatusColor(status)} light={status === "pending"}>
            {details ? (
                <ActivityTypography variant="body4Strong" light>
                    {details}
                </ActivityTypography>
            ) : undefined}
        </ActivityStatus>
    );
};

export default ConnectedSiteStatus;
