import { render } from "test-utils";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { screen } from "@testing-library/react-native";
import { PartialDappDtoMock } from "mocks/common/activity/partial-dapp-dto.mock";

describe("Tests for ConnectedSite", () => {
    const dAppMock = new PartialDappDtoMock();
    test("Renders correctly", () => {
        render(<ConnectedSite app={dAppMock} />);

        expect(screen.getByText(dAppMock.name)).toBeDefined();
        expect(screen.getByText(dAppMock.description)).toBeDefined();
    });
});
