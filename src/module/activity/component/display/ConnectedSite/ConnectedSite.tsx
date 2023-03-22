import { PartialDappDto } from "module/api/common";

import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";

interface ConnectedSiteProps {
    app: PartialDappDto;
}

const ConnectedSite = ({ app: { image, name, description } }: ConnectedSiteProps) => {
    return <ActivityCard imageUrl={image!} title={name} description={description} />;
};

export default ConnectedSite;
