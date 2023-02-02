export type ConnectedSiteStatusType = "connected" | "failed";

export type ConnectedSiteType = {
    title: string;
    source?: string;
    status: ConnectedSiteStatusType;
};
