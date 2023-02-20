import { render, translate } from "test-utils";
import WalletAdvisesScreen from "module/wallet/screen/WalletAdvisesScreen";

describe("WalletAdvisesScreen tests", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // Cannot test all flow as we cannot swipe between pages with jest
    test("Renders correctly", () => {
        const handleNextScreen = jest.fn();

        const screen = render(<WalletAdvisesScreen onNextScreen={handleNextScreen} nextScreenText="Next Screen" />);

        expect(screen.getByText(translate("advise1_title"))).toBeDefined();
    });
});
