import { render, translate } from "test-utils";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import { fireEvent, screen } from "@testing-library/react-native";
import { capitalize } from "@peersyst/react-utils";
import ActivityAction from "module/activity/core/ActivityAction/ActivityAction";

describe("Tests for ActivityAction", () => {
    test("Renders correctly with action disconnect", () => {
        render(<ActivityAction action={ActivityActionKind.DISCONNECT} onAction={jest.fn()} />);

        expect(screen.queryByText(capitalize(translate("disconnect")))).toBeDefined();
        expect(screen.queryByTestId("ChevronRightIcon")).toBeNull();
    });

    test("Renders correctly with action sign", () => {
        render(<ActivityAction action={ActivityActionKind.SIGN} onAction={jest.fn()} />);

        expect(screen.queryByText(capitalize(translate("disconnect")))).toBeNull();
        expect(screen.queryByTestId("ChevronRightIcon")).toBeDefined();
    });

    test("Calls on action after pressing", () => {
        const mockOnAction = jest.fn();

        render(<ActivityAction action={ActivityActionKind.DISCONNECT} onAction={mockOnAction} />);

        const button = screen.getByText(capitalize(translate("disconnect")));
        fireEvent.press(button);

        expect(mockOnAction).toHaveBeenCalled();
    });
});
