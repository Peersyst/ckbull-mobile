import { render } from "test-utils";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import { Text } from "react-native";
import { fireEvent, screen } from "@testing-library/react-native";

describe("CardNavigatorModal tests", () => {
    test("Renders correctly without steps", () => {
        render(
            <CardNavigatorModal navbar={{ title: "Title" }}>
                <Text>children</Text>
            </CardNavigatorModal>,
        );

        expect(screen.getByText("Title")).toBeDefined();
        expect(screen.getByText("children")).toBeDefined();
    });

    test("Renders Back", () => {
        render(
            <CardNavigatorModal navbar={{ title: "Title", back: true }}>
                <Text>Content</Text>
            </CardNavigatorModal>,
        );

        expect(screen.getByTestId("BackIcon")).toBeDefined();
    });

    test("Calls onBack", () => {
        const handleBack = jest.fn();

        render(
            <CardNavigatorModal navbar={{ title: "Title", back: true, onBack: handleBack }}>
                <Text>Content</Text>
            </CardNavigatorModal>,
        );

        fireEvent.press(screen.getByTestId("BackIcon"));
        expect(handleBack).toHaveBeenCalled();
    });

    test("Renders close action and calls onAction", () => {
        const mockOnAction = jest.fn();

        render(
            <CardNavigatorModal navbar={{ title: "Title", action: "close", onAction: mockOnAction }}>
                <Text>Content</Text>
            </CardNavigatorModal>,
        );

        const closeButton = screen.getByTestId("CircleErrorIcon");
        expect(closeButton).toBeDefined();
        fireEvent.press(closeButton);
        expect(mockOnAction).toHaveBeenCalled();
    });

    test("Renders hide action and calls onAction", () => {
        const mockOnAction = jest.fn();

        render(
            <CardNavigatorModal navbar={{ title: "Title", action: "hide", onAction: mockOnAction }}>
                <Text>Content</Text>
            </CardNavigatorModal>,
        );

        const closeButton = screen.getByTestId("ChevronUpIcon");
        expect(closeButton).toBeDefined();
        fireEvent.press(closeButton);
        expect(mockOnAction).toHaveBeenCalled();
    });
});
