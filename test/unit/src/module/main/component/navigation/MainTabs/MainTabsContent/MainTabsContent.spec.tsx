import { render } from "test-utils";
import MainTabsContent from "module/main/component/navigation/MainTabs/MainTabsContent/MainTabsContent";
import { Typography } from "@peersyst/react-native-components";
import { screen } from "@testing-library/react-native";

describe("MainTabsContent tests", () => {
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

    test("Renders correctly tab item", () => {
        render(<MainTabsContent tabs={mockTabs} />);

        expect(screen.getByText("Text1")).toBeDefined();
        expect(screen.queryByText("Text2")).toBeNull();
        expect(screen.queryByText("Text3")).toBeNull();
    });
});
