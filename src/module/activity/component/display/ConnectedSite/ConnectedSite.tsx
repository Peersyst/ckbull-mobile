import { SiteImage } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import BaseActivity from "module/activity/core/ActivityCard/ActivityCard";
import ConnectedSiteStatus from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";
import { placeholder_image } from "images";
import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";

interface ConnectedSiteProps {
    site: ConnectedSiteType;
}

const ConnectedSite = ({ site }: ConnectedSiteProps): JSX.Element => {
    const { title, source = "", status, action } = site;

    return (
        <BaseActivity title={title} action={action} onAction={() => undefined}>
            {{
                header: <SiteImage source={{ uri: source }} fallback={placeholder_image} />,
                description: <ConnectedSiteStatus status={status} details={"this is a detail"} />,
            }}
        </BaseActivity>
    );
};

export default ConnectedSite;
