import { render, translate } from "test-utils";
import HomeScreen from "module/home/screen/HomeScreen";
import { UseServiceInstanceMock, UseWalletStateMock } from "test-mocks";
describe("HomeScreen tests", () => {
    new UseServiceInstanceMock();
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly when a wallet is selected", () => {
        new UseWalletStateMock();
        const screen = render(<HomeScreen />);
        expect(screen.getByText(translate("transactions"))).toBeDefined();
    });

    test("Renders correctly when a wallet is not selected", () => {
        new UseWalletStateMock();
        const screen = render(<HomeScreen />);
        expect(screen.getByText(translate("add_a_new_account"))).toBeDefined();
    });
});
