import { render } from "test-utils";
import ConnectedSiteList from "module/activity/component/display/ConnectedSiteList/ConnectedSiteList";
import { screen, waitFor } from "@testing-library/react-native";
import * as useGetConnectedSites from "module/activity/queries/useGetConnectedSites";
import { UseServiceInstanceMock } from "mocks/common";

describe("ConnectedSiteList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with connectedSites", async () => {
        const getConnectedSitesMock = jest.spyOn(useGetConnectedSites, "default");

        render(<ConnectedSiteList />);

        await waitFor(() => expect(getConnectedSitesMock).toHaveBeenCalled());
        expect(screen.getAllByText("Figma")).toHaveLength(3);
    });
});
