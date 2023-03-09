import { MockedUnlockableAmounts } from "mocks/DAO";
import { render, translate } from "test-utils";
import * as UseUncommittedTransaction from "module/transaction/hook/useUncommittedTransaction";
import WithdrawFooter from "module/dao/screen/SelectAccountAndDepositScreen/WithdrawFooter";

describe("Test for the withdraw button", () => {
    beforeAll(() => {
        jest.spyOn(UseUncommittedTransaction, "default").mockReturnValue(false);
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly with a selected deposit", () => {
        const screen = render(<WithdrawFooter unlockableDeposit={MockedUnlockableAmounts[0]} hasDeposits />);
        expect(screen.getByText(translate("withdraw"))).toBeDefined();
    });
    test("Renders correctly with a selected withdraw unlockable", () => {
        const screen = render(<WithdrawFooter unlockableDeposit={MockedUnlockableAmounts[1]} hasDeposits />);
        expect(screen.getByText(translate("unlock"))).toBeDefined();
    });
});
