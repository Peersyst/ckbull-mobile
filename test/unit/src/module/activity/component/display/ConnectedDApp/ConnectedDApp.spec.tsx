import { render } from "test-utils";
import { screen } from "@testing-library/react-native";
import { PartialDappDtoMock } from "mocks/common/activity/partial-dapp-dto.mock";
import ConnectedDApp from "module/activity/component/display/ConnectedDApp/ConnectedDApp";

describe("Tests for ConnectedSite", () => {
    const dAppMock = new PartialDappDtoMock();
    test("Renders correctly", () => {
        render(<ConnectedDApp dApp={dAppMock} />);

        expect(screen.getByText(dAppMock.name)).toBeDefined();
        expect(screen.getByText(dAppMock.description)).toBeDefined();
    });
});
