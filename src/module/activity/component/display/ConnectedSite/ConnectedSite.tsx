import { ConnectedSiteStatusType, ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { useTheme } from "@peersyst/react-native-styled";
import { useTranslate } from "module/common/hook/useTranslate";
import { SiteImage } from "module/activity/component/display/ConnectedSite/ConnectedSite.styles";
import { placeholder_image } from "images";
import useGetConnectedSiteAction from "module/activity/hook/useGetConnectedSiteAction";

interface ConnectedSiteProps {
    site: ConnectedSiteType;
}

const ConnectedSite = ({ site: { title, source = "", status } }: ConnectedSiteProps) => {
    const theme = useTheme();
    const translate = useTranslate();

    const { handleActionElement, handleOnAction } = useGetConnectedSiteAction();

    const handleStatusColor = (status: ConnectedSiteStatusType): string => {
        switch (status) {
            case "connected":
                return theme.palette.green[200];
            case "failed":
                return theme.palette.red;
            default:
                return theme.palette.text;
        }
    };

    return (
        <ActivityCard
            display={<SiteImage source={source ? { uri: source } : placeholder_image} />}
            title={title}
            description={translate(status)}
            actionElement={handleActionElement(status)}
            onAction={handleOnAction(status)}
            style={{ description: { color: handleStatusColor(status) } }}
        />
    );
};

export default ConnectedSite;
