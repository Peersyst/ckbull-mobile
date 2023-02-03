import styled from "@peersyst/react-native-styled";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { ConnectedSiteRootProps, ConnectedSiteStatusType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";

export const ConnectedSiteRoot = styled(ActivityCard)<ConnectedSiteRootProps>(({ theme, status }) => {
    const handleStatusColor = (status: ConnectedSiteStatusType): string => {
        switch (status) {
            case "connected":
                return theme.palette.green[200];
            case "failed":
                return theme.palette.red;
            default:
                return theme.palette.text;
        }
    };

    return {
        description: {
            color: handleStatusColor(status),
        },
    };
});
