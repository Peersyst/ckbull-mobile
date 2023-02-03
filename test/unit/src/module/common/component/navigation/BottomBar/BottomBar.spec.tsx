import BottomBar from "module/common/component/navigation/BottomBar/BottomBar";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import { fireEvent, render, translate } from "test-utils";
import mockedState from "./utils/mockedState";

describe("BottomBar test", () => {
    test("Renders correctly", () => {
        const screen = render(<BottomBar state={{ ...mockedState, index: 0 } as any} navigation={{ navigate: jest.fn() } as any} />);
        //DAO
        expect(screen.getByText(translate("DAO"))).toBeDefined();
        expect(screen.getByTestId("DaoIcon")).toBeDefined();
        //Account
        expect(screen.getByText(translate("account"))).toBeDefined();
        expect(screen.getByTestId("AccountIcon")).toBeDefined();
        //Wallet
        expect(screen.getByText(translate("scan"))).toBeDefined();
        expect(screen.getByTestId("QrIcon")).toBeDefined();
        //Activity
        expect(screen.getByTestId("ActivityIcon")).toBeDefined();
        expect(screen.getByText(translate("activity"))).toBeDefined();
        //News
        expect(screen.getByTestId("PinIcon")).toBeDefined();
        expect(screen.getByText(translate("news"))).toBeDefined();
    });
    test("Navigate to DAO Screen", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={mockedState as any} navigation={{ navigate: mockedNavigate } as any} />);
        const daoButton = screen.getByTestId("DaoIcon");
        fireEvent.press(daoButton);
        expect(mockedNavigate).toHaveBeenCalledWith(MainBottomScreens.DAO);
    });
    test("Navigate to Account Screen", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={mockedState as any} navigation={{ navigate: mockedNavigate } as any} />);
        const accountIcon = screen.getByTestId("AccountIcon");
        fireEvent.press(accountIcon);
        expect(mockedNavigate).toHaveBeenCalledWith(MainBottomScreens.HOME);
    });
    test("Navigate to Activity Screen", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={mockedState as any} navigation={{ navigate: mockedNavigate } as any} />);
        const activityIcon = screen.getByTestId("ActivityIcon");
        fireEvent.press(activityIcon);
        expect(mockedNavigate).toHaveBeenCalledWith(MainBottomScreens.ACTIVITY);
    });

    test("Navigate to Scan Screen", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={mockedState as any} navigation={{ navigate: mockedNavigate } as any} />);
        const qrIcon = screen.getByTestId("QrIcon");
        fireEvent.press(qrIcon);
    });
    test("Navigate to News Screen", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={{ ...mockedState, index: 0 } as any} navigation={{ navigate: mockedNavigate } as any} />);
        const newsButton = screen.getByTestId("PinIcon");
        fireEvent.press(newsButton);
        expect(mockedNavigate).toHaveBeenCalledWith(MainBottomScreens.NEWS);
    });
    test("Dont't navigate to news because it is in the news screen. index 2 in the routes -> see mockedState", () => {
        const mockedNavigate = jest.fn();
        const screen = render(<BottomBar state={mockedState as any} navigation={{ navigate: mockedNavigate } as any} />);
        const newsButton = screen.getByTestId("PinIcon");
        fireEvent.press(newsButton);
        expect(mockedNavigate).not.toHaveBeenCalled();
    });
});
