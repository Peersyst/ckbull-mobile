import Recoil from "recoil";
import { render, translate } from "test-utils";
import AddWallet from "module/wallet/component/core/AddWallet/AddWallet";

describe("AddWallet tests", () => {
    test("Renders correctly", () => {
        const resetCreateWalletState = jest.fn();
        jest.spyOn(Recoil, "useResetRecoilState").mockReturnValue(resetCreateWalletState);

        const screen = render(<AddWallet />);
        expect(screen.getByText(translate("how_add_account"))).toBeDefined();
        expect(screen.getByText(translate("can_add_account"))).toBeDefined();
    });
});
