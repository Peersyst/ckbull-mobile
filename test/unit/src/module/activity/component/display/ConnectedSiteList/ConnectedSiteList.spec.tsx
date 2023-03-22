import { render } from "test-utils";
import ConnectedSiteList from "module/activity/component/display/ConnectedSiteList/ConnectedSiteList";
import { screen, waitFor } from "@testing-library/react-native";
import { UseServiceInstanceMock } from "mocks/common";
import { PartialDappDtoMock } from "mocks/common/activity/partial-dapp-dto.mock";
import { SignInRequestsService } from "module/api/service";

describe("ConnectedSiteList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with connectedSites", async () => {
        const getConnectedSitesMock = jest
            .spyOn(SignInRequestsService, "getSignInRequests")
            .mockResolvedValue([new PartialDappDtoMock(), new PartialDappDtoMock()]);

        render(<ConnectedSiteList />);

        await waitFor(() => expect(getConnectedSitesMock).toHaveBeenCalled());
        expect(screen.getAllByText("name")).toHaveLength(2);
    });
});
