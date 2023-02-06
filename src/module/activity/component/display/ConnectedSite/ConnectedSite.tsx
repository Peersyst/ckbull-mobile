import { useTranslate } from "module/common/hook/useTranslate";
import { ConnectedSiteRoot } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import useGetConnectedSiteAction from "module/activity/hook/useGetConnectedSiteAction";
import { ConnectedSiteDto } from "module/activity/dto/dtos";

interface ConnectedSiteProps {
    site: ConnectedSiteDto;
}

const ConnectedSite = ({
    site: {
        app: { title, imageUrl = "" },
        status,
    },
}: ConnectedSiteProps) => {
    const translate = useTranslate();

    const { actionElement, handleAction } = useGetConnectedSiteAction(status);

    return (
        <ConnectedSiteRoot
            status={status}
            imageUrl={imageUrl}
            title={title}
            description={translate(status)}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default ConnectedSite;
