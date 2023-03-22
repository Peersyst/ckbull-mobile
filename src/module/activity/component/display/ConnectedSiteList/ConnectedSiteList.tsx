import MainList from "module/main/component/display/MainList/MainList";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import useGetConnectedSites from "module/activity/queries/useGetConnectedSites";
import { useTranslate } from "module/common/hook/useTranslate";

const ConnectedSiteList = (): JSX.Element => {
    const translate = useTranslate();
    const { data: connectedSites, isLoading, refetch } = useGetConnectedSites();

    return (
        <MainList
            data={connectedSites}
            onRefresh={refetch}
            renderItem={({ item: connectedSite }) => <ConnectedSite app={connectedSite} />}
            ListEmptyComponent={<EmptyListComponent title={translate("noConnectedSites")} />}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            loading={isLoading}
        />
    );
};

export default ConnectedSiteList;
