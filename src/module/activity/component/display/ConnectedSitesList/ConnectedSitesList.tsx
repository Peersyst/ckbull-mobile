import MainList from "module/main/component/display/MainList/MainList";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";

const ConnectedSitesList = (): JSX.Element => {
    // const connectedSites = useGetConnectedSites()
    const mockData: readonly any[] | null | undefined = [];

    return <MainList data={mockData} renderItem={({ item: connectedSite }) => <ConnectedSite site={connectedSite} />} />;
};

export default ConnectedSitesList;
