import { ConnectedSiteStatusType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { ReactElement } from "react";
import { useTranslate } from "module/common/hook/useTranslate";
import { Typography } from "@peersyst/react-native-components";

interface UseGetConnectedSiteAction {
    actionElement: ReactElement | undefined;
    handleAction: (() => unknown) | undefined;
}

export default function (status: ConnectedSiteStatusType): UseGetConnectedSiteAction {
    const translate = useTranslate();

    const getActionElement = (): ReactElement | undefined => {
        switch (status) {
            case "connected":
                return (
                    <Typography variant="body2Light" color="red">
                        {translate("disconnect")}
                    </Typography>
                );
            default:
                return undefined;
        }
    };

    const getHandleAction = (): (() => unknown) | undefined => {
        switch (status) {
            case "connected":
                // Temporal until doing sign/review_connection modal
                return () => undefined;
            default:
                return undefined;
        }
    };

    return {
        actionElement: getActionElement(),
        handleAction: getHandleAction(),
    };
}
