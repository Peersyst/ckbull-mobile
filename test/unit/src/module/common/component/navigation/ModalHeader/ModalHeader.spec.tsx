import { fireEvent, screen } from "@testing-library/react-native";
import ModalHeader from "module/common/component/navigation/ModalHeader/ModalHeader";
import { render } from "test-utils";

describe("ModalHeader", () => {
    const titleMock = "title";

    test("Renders title correctly", () => {
        render(<ModalHeader title={titleMock} dismissal="close" onDismiss={jest.fn()} />);

        expect(screen.getByText(titleMock)).toBeDefined();
    });

    test("Renders hide dismissal correctly", () => {
        render(<ModalHeader title={titleMock} dismissal="hide" onDismiss={jest.fn()} />);

        expect(screen.getByTestId("ChevronDownIcon")).toBeDefined();
    });

    test("Renders close dismissal correctly", () => {
        render(<ModalHeader title={titleMock} dismissal="close" onDismiss={jest.fn()} />);

        expect(screen.getByTestId("CircleErrorIcon")).toBeDefined();
    });

    test("Triggers onDismiss", () => {
        const handleDismiss = jest.fn();

        render(<ModalHeader title={titleMock} dismissal="close" onDismiss={handleDismiss} />);

        fireEvent.press(screen.getByTestId("CircleErrorIcon"));

        expect(handleDismiss).toHaveBeenCalled();
    });
});
