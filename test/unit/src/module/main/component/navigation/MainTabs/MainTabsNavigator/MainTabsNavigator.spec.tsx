import MainTabsNavigator from "module/main/component/navigation/MainTabs/MainTabsNavigator/MainTabsNavigator";
import { render } from "test-utils";
import { Typography } from "@peersyst/react-native-components";
import { screen } from "@testing-library/react-native";

describe("MainTabsNavigator tests", () => {
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

    test("Renders correctly tab titles", () => {
        render(<MainTabsNavigator tabs={mockTabs} />);

        expect(screen.getByText(mockTabs[0].title)).toBeDefined();
        expect(screen.getByText(mockTabs[1].title)).toBeDefined();
        expect(screen.getByText(mockTabs[2].title)).toBeDefined();
    });
});
