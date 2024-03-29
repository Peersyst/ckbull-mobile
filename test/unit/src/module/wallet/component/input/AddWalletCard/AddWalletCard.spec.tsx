import { render, translate } from "test-utils";
import AddWalletCard from "module/wallet/component/display/AddWalletCard/AddWalletCard";

describe("AddWalletCard tests", () => {
    test("Renders correctly", () => {
        const screen = render(<AddWalletCard />);
        expect(screen.getByText(translate("add_a_new_account"))).toBeDefined();
    });
});
