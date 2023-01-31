import { SiteImage } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import BaseActivity from "module/activity/component/display/ActivityCard/ActivityCard";
import ConnectedSiteStatus, { ConnectedSiteStatusProps } from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import { placeholder_image } from "images";

interface ConnectedSiteProps extends ConnectedSiteStatusProps {
    title: string;
    source?: string;
    action: ActivityActionKind;
    onAction: () => void;
}

const ConnectedSite = ({ title, action, onAction, source, status }: ConnectedSiteProps): JSX.Element => {
    return (
        <BaseActivity title={title} action={action} onAction={onAction}>
            {{
                header: <SiteImage source={source ? { uri: source } : placeholder_image} />,
                description: <ConnectedSiteStatus status={status} details={"this is a detail"} />,
            }}
        </BaseActivity>
    );
};

export default ConnectedSite;
