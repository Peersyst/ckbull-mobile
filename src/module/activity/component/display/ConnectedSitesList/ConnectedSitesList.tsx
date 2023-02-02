import MainList from "module/main/component/display/MainList/MainList";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";

const ConnectedSitesList = (): JSX.Element => {
    // const connectedSites = useGetConnectedSites()
    const mockSite: ConnectedSiteType = { title: "Figma", status: "connected", action: ActivityActionKind.DISCONNECT };
    const mockData: readonly any[] | null | undefined = [mockSite, mockSite, mockSite];

    return (
        <MainList
            data={mockData}
            renderItem={({ item: connectedSite }) => <ConnectedSite site={connectedSite} />}
            ListEmptyComponent={<EmptyListComponent />}
            contentContainerStyle={{ paddingHorizontal: 20 }}
        />
    );
};

export default ConnectedSitesList;
