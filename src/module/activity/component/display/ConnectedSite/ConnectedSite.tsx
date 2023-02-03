import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { useTranslate } from "module/common/hook/useTranslate";
import { ConnectedSiteRoot, SiteImage } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import { placeholder_image } from "images";
import useGetConnectedSiteAction from "module/activity/hook/useGetConnectedSiteAction";

interface ConnectedSiteProps {
    site: ConnectedSiteType;
}

const ConnectedSite = ({ site: { title, source = "", status } }: ConnectedSiteProps) => {
    const translate = useTranslate();

    const { actionElement, handleAction } = useGetConnectedSiteAction(status);

    return (
        <ConnectedSiteRoot
            status={status}
            display={<SiteImage source={source ? { uri: source } : placeholder_image} />}
            title={title}
            description={translate(status)}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default ConnectedSite;
