import { render } from "test-utils";
import FloatingTabsNavigator from "module/home/component/navigation/FloatingTabs/FloatingTabsNavigator/FloatingTabsNavigator";
import { screen } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("FloatingTabsNavigator tests", () => {
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
        render(<FloatingTabsNavigator tabs={mockTabs} />);

        expect(screen.getByText(mockTabs[0].title)).toBeDefined();
        expect(screen.getByText(mockTabs[1].title)).toBeDefined();
        expect(screen.getByText(mockTabs[2].title)).toBeDefined();
    });
});
