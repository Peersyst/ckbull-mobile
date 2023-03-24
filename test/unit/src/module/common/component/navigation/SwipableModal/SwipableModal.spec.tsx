import { render, translate } from "test-utils";
import SwipableModal from "module/common/component/navigation/SwipableModal/SwipableModal";
import { Typography } from "@peersyst/react-native-components";
import { fireEvent, screen } from "@testing-library/react-native";

describe("SwipableModal tests", () => {
    const mockChildren = <Typography variant="body2Light">ModalBody</Typography>;

    test("Renders correctly without alternative action", () => {
        render(
            <SwipableModal title={"title"} dismissal="close">
                {mockChildren}
            </SwipableModal>,
        );

        expect(screen.getByText("title")).toBeDefined();
        expect(screen.getByText(translate("slideToAccept"))).toBeDefined();
        expect(screen.getByText("ModalBody")).toBeDefined();
    });

    test("Renders correctly with alternative action", () => {
        const mockOnAltAction = jest.fn();
        const mockAltActionMessage = "alternative";

        render(
            <SwipableModal title={"title"} dismissal="close" altActionMessage={mockAltActionMessage} onAltAction={mockOnAltAction}>
                {mockChildren}
            </SwipableModal>,
        );

        const altButton = screen.getByRole("button", { name: mockAltActionMessage });

        expect(screen.getByText("title")).toBeDefined();
        expect(altButton).toBeDefined();
        expect(screen.getByText(translate("or"))).toBeDefined();
        expect(screen.getByText("ModalBody"));

        fireEvent.press(altButton);

        expect(mockOnAltAction).toHaveBeenCalledTimes(1);
    });
});
