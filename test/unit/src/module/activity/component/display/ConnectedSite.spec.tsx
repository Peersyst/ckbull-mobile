import { render, translate } from "test-utils";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { screen } from "@testing-library/react-native";

describe("Tests for ConnectedSite", () => {
    test("Renders status connected", () => {
        render(<ConnectedSite site={{ title: "title", status: "connected" }} />);

        expect(screen.getByText(translate("disconnect"))).toHaveStyle({ color: "#FF1717" });
        expect(screen.getByText(translate("connected"))).toHaveStyle({ color: "#1ED882" });
    });

    test("Renders status failed", () => {
        render(<ConnectedSite site={{ title: "title", status: "failed" }} />);

        expect(screen.getByText(translate("failed"))).toHaveStyle({ color: "#FF1717" });
    });
});
