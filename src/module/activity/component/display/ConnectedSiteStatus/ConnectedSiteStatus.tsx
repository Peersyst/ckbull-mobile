import { useTranslate } from "module/common/hook/useTranslate";
import Typography from "module/common/component/display/Typography/Typography";

export interface ConnectedSiteStatusProps {
    status: "connected" | "disconnected" | "pending" | "failed";
}

const ConnectedSiteStatus = ({ status }: ConnectedSiteStatusProps): JSX.Element => {
    const translate = useTranslate();

    return <Typography variant="body4Regular">{translate("site-" + status)}</Typography>;
};

export default ConnectedSiteStatus;
