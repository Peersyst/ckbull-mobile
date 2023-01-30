import { render } from "test-utils";
import { screen } from "@testing-library/react-native";
import FloatingTabsContent from "module/home/component/navigation/FloatingTabs/FloatingTabsContent/FloatingTabsContent";
import { Typography } from "@peersyst/react-native-components";

describe("FloatingTabsContent tests", () => {
    const mockTabs = [
        {
            title: "Tab1",
            item: <Typography variant="body1">Text1</Typography>,
        },
        {
            title: "Tab2",
            item: <Typography variant="body1">Text2</Typography>,
        },
        {
            title: "Tab3",
            item: <Typography variant="body1">Text3</Typography>,
        },
    ];

    test("Renders correctly", () => {
        render(<FloatingTabsContent tabs={mockTabs} />);

        expect(screen.getByText("Text1")).toBeDefined();
        expect(screen.queryByText("Text2")).toBeNull();
        expect(screen.queryByText("Text3")).toBeNull();
    });
});
