import { useQuery, UseQueryResult } from "react-query";
import Queries from "../../../query/queries";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { ConnectedSiteDto } from "module/activity/dto/dtos";

/*
 *  MOCKED CALL PENDING TO BACKEND
 * */
export default function (index?: number): UseQueryResult<ConnectedSiteDto[]> {
    const mockSite: ConnectedSiteDto = { app: { title: "Figma" }, status: "connected" };
    const mockData: ConnectedSiteDto[] = [mockSite, mockSite, mockSite];
    const { index: usedIndex, network, queryEnabled } = useServiceInstance(index);
    const getMockConnectedSites = () => {
        return mockData;
    };

    return useQuery([Queries.GET_CONNECTED_SITES, usedIndex, network], getMockConnectedSites, {
        enabled: queryEnabled,
    });
}
