import { fireEvent, render } from "test-utils";
import { translate } from "locale";
import SettingsScreen from "module/settings/screen/SettingsScreen";
import * as Navigation from "@react-navigation/native";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";

describe("SettingsScreen tests", () => {
    test("Renders correctly", () => {
        const screen = render(<SettingsScreen navigation={jest.fn() as any} />);
        expect(screen.getByText(translate("settings"))).toBeDefined();
        expect(screen.getByText(translate("general_settings"))).toBeDefined();
        expect(screen.getByText(translate("advanced_settings"))).toBeDefined();
        expect(screen.getByText(translate("security_settings"))).toBeDefined();
    });

    test("Navigates to the general settings", () => {
        const mockedNavigation = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigation });
        const screen = render(<SettingsScreen navigation={jest.fn() as any} />);

        const generalMenu = screen.getByText(translate("general_settings"));
        fireEvent.press(generalMenu);
        expect(mockedNavigation).toHaveBeenCalledWith(MainBottomScreens.GENERAL_SETTINGS);
    });

    test("Navigates to the advanced settings", () => {
        const mockedNavigation = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigation });
        const screen = render(<SettingsScreen navigation={jest.fn() as any} />);
        const advancedMenu = screen.getByText(translate("advanced_settings"));
        fireEvent.press(advancedMenu);
        expect(mockedNavigation).toHaveBeenCalledWith(MainBottomScreens.ADVANCED_SETTINGS);
    });

    test("Navigates to the security settings", () => {
        const mockedNavigation = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigation });
        const screen = render(<SettingsScreen navigation={jest.fn() as any} />);
        const securityMenu = screen.getByText(translate("security_settings"));
        fireEvent.press(securityMenu);
        expect(mockedNavigation).toHaveBeenCalledWith(MainBottomScreens.SECURITY_SETTINGS);
    });
});
