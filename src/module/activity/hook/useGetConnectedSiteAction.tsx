import { ConnectedSiteStatusType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { ReactElement } from "react";
import Typography from "module/common/component/display/Typography/Typography";
import { useTranslate } from "module/common/hook/useTranslate";
import { useTheme } from "@peersyst/react-native-styled";

interface UseGetConnectedSiteAction {
    handleActionElement: (status: ConnectedSiteStatusType) => ReactElement | undefined;
    handleOnAction: (status: ConnectedSiteStatusType) => (() => unknown) | undefined;
}

export default function (): UseGetConnectedSiteAction {
    const translate = useTranslate();
    const theme = useTheme();

    const handleActionElement = (status: ConnectedSiteStatusType): ReactElement | undefined => {
        switch (status) {
            case "connected":
                return (
                    <Typography variant="body2Light" style={{ color: theme.palette.red }}>
                        {translate("disconnect")}
                    </Typography>
                );
            default:
                return undefined;
        }
    };

    const handleOnAction = (status: ConnectedSiteStatusType): (() => unknown) | undefined => {
        switch (status) {
            case "connected":
                // Temporal until doing sign/review_connection modal
                return () => undefined;
            default:
                return undefined;
        }
    };

    return {
        handleActionElement,
        handleOnAction,
    };
}
