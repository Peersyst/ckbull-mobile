import MainList from "module/main/component/display/MainList/MainList";
import ConnectedDApp from "module/activity/component/display/ConnectedDApp/ConnectedDApp";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import useGetConnectedSites from "module/activity/queries/useGetConnectedDApps";
import { useTranslate } from "module/common/hook/useTranslate";

const ConnectedDAppsList = (): JSX.Element => {
    const translate = useTranslate();
    const { data: connectedDApps, isLoading, refetch } = useGetConnectedSites();

    return (
        <MainList
            data={connectedDApps}
            onRefresh={refetch}
            renderItem={({ item: connectedSite }) => <ConnectedDApp dApp={connectedSite} />}
            ListEmptyComponent={<EmptyListComponent title={translate("noConnectedSites")} />}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            loading={isLoading}
        />
    );
};

export default ConnectedDAppsList;
