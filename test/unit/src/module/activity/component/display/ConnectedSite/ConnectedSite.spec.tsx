import { render, translate } from "test-utils";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { screen } from "@testing-library/react-native";
import { PartialDappDtoMock } from "mocks/common/activity/partial-dapp-dto.mock";

describe("Tests for ConnectedSite", () => {
    const dAppMock = new PartialDappDtoMock();
    test("Renders status connected", () => {
        render(<ConnectedSite app={dAppMock} />);

        expect(screen.getByText(translate("disconnect"))).toHaveStyle({ color: "#FF1717" });
        expect(screen.getByText(translate("connected"))).toHaveStyle({ color: "#1ED882" });
    });

    test("Renders status failed", () => {
        render(<ConnectedSite app={dAppMock} />);

        expect(screen.getByText(translate("failed"))).toHaveStyle({ color: "#FF1717" });
    });
});
