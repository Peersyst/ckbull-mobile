import { render } from "test-utils";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import { Text } from "react-native";

describe("BaseMainScreen tests", () => {
    test("Renders correctly with navbar", () => {
        const screen = render(
            <BaseMainScreen>
                <Text>Content</Text>
            </BaseMainScreen>,
        );

        expect(screen.getByText("Content")).toBeDefined();
    });
});
