import { SiteImage } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import BaseActivity from "module/activity/core/BaseActivity/BaseActivity";
import { View } from "react-native";
import ConnectedSiteStatus, { ConnectedSiteStatusProps } from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";

interface ConnectedSiteProps extends ConnectedSiteStatusProps {
    title: string;
    source: string;
    action: "disconnect" | "open";
    onAction: () => void;
}

const ConnectedSite = ({ title, source, status }: ConnectedSiteProps): JSX.Element => {
    return (
        <BaseActivity title={title}>
            {{
                header: <SiteImage source={{ uri: source }} />,
                statusDetail: <ConnectedSiteStatus status={status} />,
                actionable: <View></View>,
            }}
        </BaseActivity>
    );
};

export default ConnectedSite;
