import Header from "module/common/component/navigation/Header/Header";
import { render } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import { MainScreens } from "module/common/component/navigation/MainNavigatorGroup/MainScreens";

const renderHeader = ({ name = "Home", navigate = jest.fn() } = {}) => {
    return render(<Header layout={{} as any} options={{} as any} route={{ name } as any} navigation={{ navigate } as any} />);
};

describe("Header tests", () => {
    test("Renders correctly - withIcons", () => {
        const screen = renderHeader();
        expect(screen.getByTestId("SettingsIcon")).toBeDefined();
    });
    test("Goes to settings", () => {
        const mockedNavigation = jest.fn();
        const screen = renderHeader({ navigate: mockedNavigation });
        const icon = screen.getByTestId("SettingsIcon");
        fireEvent.press(icon);
        expect(mockedNavigation).toHaveBeenCalledWith(MainScreens.SETTINGS);
    });
});
