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
});
