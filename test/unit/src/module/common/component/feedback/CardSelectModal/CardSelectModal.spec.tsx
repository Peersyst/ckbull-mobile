import { render } from "test-utils";
import CardSelectModal from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { fireEvent, screen } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("CardSelectModal tests", () => {
    const mockTitle = "mockTitle";

    test("Renders correctly with action close", () => {
        render(
            <CardSelectModal title={mockTitle} action="close">
                <Typography variant="body1Regular">content</Typography>
            </CardSelectModal>,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText("content")).toBeDefined();
        expect(screen.getByTestId("CircleErrorIcon")).toBeDefined();
        expect(screen.queryByTestId("ChevronDownIcon")).toBeNull();
    });

    test("Renders correctly with action hide", () => {
        render(
            <CardSelectModal title={mockTitle} action="hide">
                <Typography variant="body1Regular">content</Typography>
            </CardSelectModal>,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText("content")).toBeDefined();
        expect(screen.queryByTestId("CircleErrorIcon")).toBeNull();
        expect(screen.getByTestId("ChevronDownIcon")).toBeDefined();
    });

    test("Calls onClose when icon pressed", () => {
        const mockOnClose = jest.fn();

        render(
            <CardSelectModal title={mockTitle} action="close" onClose={mockOnClose}>
                <Typography variant="body1Regular">content</Typography>
            </CardSelectModal>,
        );

        const iconButton = screen.getByTestId("CircleErrorIcon");
        fireEvent.press(iconButton);
        expect(mockOnClose).toHaveBeenCalled();
    });
});
