import { render } from "test-utils";
import CardSelectModal from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { fireEvent, screen } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("CardSelectModal tests", () => {
    const mockTitle = "mockTitle";

    test("Renders correctly with action close", () => {
        render(
            <CardSelectModal title={mockTitle} dismissal="close">
                <Typography variant="body1Regular">content</Typography>
            </CardSelectModal>,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText("content")).toBeDefined();
    });

    test("Renders correctly with action hide", () => {
        render(
            <CardSelectModal title={mockTitle} dismissal="hide">
                <Typography variant="body1Regular">content</Typography>
            </CardSelectModal>,
        );

        expect(screen.getByText(mockTitle)).toBeDefined();
        expect(screen.getByText("content")).toBeDefined();
    });
});
