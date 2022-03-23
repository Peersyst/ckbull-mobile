import { translate } from "locale";
import UpdatePinScreen from "module/settings/screen/UpdatePinScreen";
import { fireEvent, render } from "test-utils";
import * as Recoil from "recoil";
import * as Navigation from "@react-navigation/native";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import * as UseCreateWalletState from "module/wallet/hook/useCreateWallet";
import { createMockedUseCreateWallet } from "mocks/useCreateWallet";

describe("Test for the UpdatePinScreen", () => {
    test("Renders correctly", () => {
        const screen = render(<UpdatePinScreen />);
        expect(screen.getByText(translate("update_your_pin")));
        expect(screen.getAllByTestId("BackIcon"));
        expect(screen.getByText(translate("enter_new_pin")));
    });
    test("Updates pin correctly", () => {
        const setPin = jest.fn();
        const mockedCreateWallet = createMockedUseCreateWallet(setPin);
        jest.spyOn(UseCreateWalletState, "default").mockReturnValue(mockedCreateWallet);
        const setMockedState = jest.fn();
        jest.spyOn(Recoil, "useSetRecoilState").mockReturnValue(setMockedState);
        const mockedNavigate = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigate });

        const screen = render(<UpdatePinScreen />);

        fireEvent.press(screen.getByText("1"));
        fireEvent.press(screen.getByText("2"));
        fireEvent.press(screen.getByText("3"));
        fireEvent.press(screen.getByText("4"));
        expect(screen.getByText(translate("repeat_pin"))).toBeDefined();
        fireEvent.press(screen.getByText("1"));
        fireEvent.press(screen.getByText("2"));
        fireEvent.press(screen.getByText("3"));
        fireEvent.press(screen.getByText("4"));

        expect(setMockedState).toHaveBeenCalled();
        expect(mockedNavigate).toHaveBeenCalledWith(MainBottomScreens.SECURITY_SETTINGS);
    });
    test("If pin is not correct no update state", () => {
        const noSetPin = jest.fn();
        const setMockedState = jest.fn();
        const mockedNavigate = jest.fn();
        jest.spyOn(Navigation, "useNavigation").mockReturnValue({ navigate: mockedNavigate });
        const mockedCreateWallet = createMockedUseCreateWallet(noSetPin);
        jest.spyOn(UseCreateWalletState, "default").mockReturnValue(mockedCreateWallet);
        jest.spyOn(Recoil, "useSetRecoilState").mockReturnValue(setMockedState);

        const screen = render(<UpdatePinScreen />);

        fireEvent.press(screen.getByText("9"));
        fireEvent.press(screen.getByText("3"));
        fireEvent.press(screen.getByText("5"));
        fireEvent.press(screen.getByText("7"));
        expect(screen.getByText(translate("repeat_pin"))).toBeDefined();
        fireEvent.press(screen.getByText("2"));
        fireEvent.press(screen.getByText("1"));
        fireEvent.press(screen.getByText("6"));
        fireEvent.press(screen.getByText("8"));

        expect(setMockedState).not.toHaveBeenCalled();
        expect(mockedNavigate).not.toHaveBeenCalledWith(MainBottomScreens.SECURITY_SETTINGS);
    });
});
