import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";

/*
 *  MOCKED CALL PENDING TO BACKEND
 * */
export default function () {
    const mockSite: ConnectedSiteType = { title: "Figma", status: "connected" };
    const mockData: readonly any[] | null | undefined = [mockSite, mockSite, mockSite];

    return mockData;
}
