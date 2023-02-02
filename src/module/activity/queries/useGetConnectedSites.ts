import { ConnectedSiteType } from "module/activity/component/display/ConnectedSite/ConnectedSite.types";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";

/*
 *  MOCKED CALL PENDING TO BACKEND
 * */
export default function () {
    const mockSite: ConnectedSiteType = { title: "Figma", status: "connected", action: ActivityActionKind.DISCONNECT };
    const mockData: readonly any[] | null | undefined = [mockSite, mockSite, mockSite];

    return mockData;
}
