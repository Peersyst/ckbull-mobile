import { render } from "test-utils";
import FloatingTabs from "module/home/component/navigation/FloatingTabs/FloatingTabs";
import { Typography } from "@peersyst/react-native-components";
import { fireEvent, screen } from "@testing-library/react-native";

describe("FloatingTabs tests", () => {
    test("Renders correctly", () => {
        const mockTabs = [
            {
                title: "Tab1",
                item: <Typography variant="body1">Text1</Typography>,
            },
            {
                title: "Tab2",
                item: <Typography variant="body1">Text2</Typography>,
            },
        ];

        render(<FloatingTabs tabs={mockTabs} />);

        const tab1 = screen.getByText(mockTabs[0].title);
        const tab2 = screen.getByText(mockTabs[1].title);
        expect(tab1).toBeDefined();
        expect(tab2).toBeDefined();
        expect(screen.getByText("Text1")).toBeDefined();
        expect(screen.queryByText("Text2")).toBeNull();

        fireEvent.press(tab2);
        expect(screen.getAllByText("Text2")).toBeDefined();
        expect(screen.queryByText("Text1")).toBeNull();
    });
});
