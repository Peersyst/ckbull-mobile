import { render, translate } from "test-utils";
import ConnectedSiteStatus from "module/activity/component/display/ConnectedSiteStatus/ConnectedSiteStatus";
import { screen } from "@testing-library/react-native";

describe("Tests for ConnectedSiteStatus", () => {
    const mockStatus = "connected";

    test("Renders correctly without details", () => {
        render(<ConnectedSiteStatus status={mockStatus} />);

        expect(screen.getByText(translate(mockStatus))).toBeDefined();
    });

    test("Renders correctly with message", () => {
        const mockDetails = "details";
        render(<ConnectedSiteStatus status={mockStatus} details={mockDetails} />);

        expect(screen.getByText(translate(mockStatus))).toBeDefined();
        expect(screen.getByText(mockDetails)).toBeDefined();
    });
});
