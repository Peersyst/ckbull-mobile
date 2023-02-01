import { render, translate } from "test-utils";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import Typography from "module/common/component/display/Typography/Typography";
import { screen } from "@testing-library/react-native";
import { capitalize } from "@peersyst/react-utils";

describe("Tests for ActivityCard", () => {
    const mockTitle = "title";
    const mockOnAction = jest.fn();

    test("Renders correctly ActivityCard children", () => {
        render(
            <ActivityCard title={mockTitle} action={ActivityActionKind.DISCONNECT} onAction={mockOnAction}>
                {{
                    header: <Typography variant="body1Strong">header</Typography>,
                    description: <Typography variant="body1Strong">description</Typography>,
                    content: <Typography variant="body1Strong">content</Typography>,
                }}
            </ActivityCard>,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText("header")).toBeDefined();
        expect(screen.getByText("description")).toBeDefined();
        expect(screen.getByText("content")).toBeDefined();
    });

    test("Renders correctly with action disconnect", () => {
        render(
            <ActivityCard title={mockTitle} action={ActivityActionKind.DISCONNECT} onAction={mockOnAction}>
                {{
                    header: <Typography variant="body1Strong">header</Typography>,
                    description: <Typography variant="body1Strong">description</Typography>,
                    content: <Typography variant="body1Strong">content</Typography>,
                }}
            </ActivityCard>,
        );

        expect(screen.getByText(capitalize(translate("disconnect")))).toBeDefined();
        expect(screen.queryByTestId("ChevronRightIcon")).toBeNull();
    });

    test("Renders correctly with action sign", () => {
        render(
            <ActivityCard title={mockTitle} action={ActivityActionKind.SIGN} onAction={mockOnAction}>
                {{
                    header: <Typography variant="body1Strong">header</Typography>,
                    description: <Typography variant="body1Strong">description</Typography>,
                    content: <Typography variant="body1Strong">content</Typography>,
                }}
            </ActivityCard>,
        );

        expect(screen.queryByText(capitalize(translate("disconnect")))).toBeNull();
        expect(screen.queryByTestId("ChevronRightIcon")).toBeDefined();
    });
});
