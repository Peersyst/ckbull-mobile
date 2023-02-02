import { ConnectedSiteStatusType } from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";

export type ConnectedSiteType = {
    title: string;
    source?: string;
    status: ConnectedSiteStatusType;
    action: ActivityActionKind;
};
