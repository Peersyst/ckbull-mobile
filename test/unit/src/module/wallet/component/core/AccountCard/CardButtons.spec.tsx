import { translate } from "locale";
import CardButtons from "module/wallet/component/core/AccountCard/CardButtons/CardButtons";
import { render } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import * as Navigation from "@react-navigation/native";
import { MainScreens } from "module/main/MainNavigatorGroup";

describe("Renders card button", () => {
    test("Renders correctly", () => {
        const screen = render(<CardButtons />);
        expect(screen.getByText(translate("send"))).toBeDefined();
        expect(screen.getByTestId("ReceiveIcon")).toBeDefined();
        expect(screen.getByTestId("SendIcon")).toBeDefined();
        expect(screen.getByText(translate("receive"))).toBeDefined();
    });
    test("Triggers correctly send button", () => {
        const mockedNavigation = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigation });
        const screen = render(<CardButtons />);
        const button = screen.getByText(translate("send"));
        fireEvent.press(button);
        expect(mockedNavigation).toHaveBeenCalledWith(MainScreens.SEND);
    });
    test("Triggers correctly receive button", () => {
        const mockedNavigation = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigation });
        const screen = render(<CardButtons />);
        const button = screen.getByText(translate("receive"));
        fireEvent.press(button);
        expect(mockedNavigation).toHaveBeenCalledWith(MainScreens.RECEIVE);
    });
});