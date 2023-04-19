import { PartialDappDto } from "module/api/service";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";

interface ConnectedDAppProps {
    dApp: PartialDappDto;
}

const ConnectedDApp = ({ dApp: { image, name, description } }: ConnectedDAppProps) => {
    return <ActivityCard imageUrl={image!} title={name} description={description} />;
};

export default ConnectedDApp;
