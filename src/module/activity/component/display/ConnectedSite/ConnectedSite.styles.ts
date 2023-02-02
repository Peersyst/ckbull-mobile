import styled from "@peersyst/react-native-styled";
import { Image } from "@peersyst/react-native-components";
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

export const SiteImage = styled(Image)(({ theme }) => ({
    width: 56,
    height: 56,
    borderRadius: theme.borderRadiusSm,
}));
