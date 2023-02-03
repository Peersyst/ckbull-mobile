import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { useQuery, UseQueryResult } from "react-query";
import Queries from "../../../query/queries";
import useServiceInstance from "module/wallet/hook/useServiceInstance";

/*
 *  MOCKED CALL PENDING TO BACKEND
 * */
export default function (index?: number): UseQueryResult<ConnectedSiteType[]> {
    const mockSite: ConnectedSiteType = { title: "Figma", status: "connected" };
    const mockData: ConnectedSiteType[] = [mockSite, mockSite, mockSite];
    const { index: usedIndex, network, queryEnabled } = useServiceInstance(index);
    const getMockConnectedSites = () => {
        return mockData;
    };

    return useQuery([Queries.GET_CONNECTED_SITES, usedIndex, network], getMockConnectedSites, {
        enabled: queryEnabled,
    });
}
