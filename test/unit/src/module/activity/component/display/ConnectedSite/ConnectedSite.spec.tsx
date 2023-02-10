import { render, translate } from "test-utils";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { screen } from "@testing-library/react-native";
import { AppMock } from "mocks/common";

describe("Tests for ConnectedSite", () => {
    const appMock = new AppMock();
    test("Renders status connected", () => {
        render(<ConnectedSite site={{ app: appMock, status: "connected" }} />);

        expect(screen.getByText(translate("disconnect"))).toHaveStyle({ color: "#FF1717" });
        expect(screen.getByText(translate("connected"))).toHaveStyle({ color: "#1ED882" });
    });

    test("Renders status failed", () => {
        render(<ConnectedSite site={{ app: appMock, status: "failed" }} />);

        expect(screen.getByText(translate("failed"))).toHaveStyle({ color: "#FF1717" });
    });
});
