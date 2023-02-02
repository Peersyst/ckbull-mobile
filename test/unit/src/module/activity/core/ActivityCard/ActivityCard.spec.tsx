import { render } from "test-utils";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { screen } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("Tests for ActivityCard", () => {
    const mockTitle = "title";
    const mockDescription = "description";
    const mockDetails = "details";
    const mockAmount = "amount";
    const mockOnAction = jest.fn();

    test("Renders correctly with onAction", () => {
        render(
            <ActivityCard
                display={<Typography variant="body1Light">display</Typography>}
                title={mockTitle}
                description={mockDescription}
                details={"details"}
                amount={mockAmount}
                actionElement={<Typography variant="body1Light">action</Typography>}
                onAction={mockOnAction}
            />,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.getByText("display")).toBeDefined();
        expect(screen.getByText(mockDetails)).toBeDefined();
        expect(screen.getByText(mockAmount)).toBeDefined();

        expect(screen.getByText("action")).toBeDefined();
    });

    test("Renders correctly with action disconnect", () => {
        render(
            <ActivityCard
                display={<Typography variant="body1Light">display</Typography>}
                title={mockTitle}
                description={mockDescription}
                details={"details"}
                amount={mockAmount}
                actionElement={<Typography variant="body1Light">action</Typography>}
            />,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.getByText("display")).toBeDefined();
        expect(screen.getByText(mockDetails)).toBeDefined();
        expect(screen.getByText(mockAmount)).toBeDefined();

        expect(screen.queryByText("action")).toBeNull();
    });
});
