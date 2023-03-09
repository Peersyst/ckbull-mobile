import { MockedUnlockableAmounts } from "mocks/DAO";
import DepositsSelector from "module/dao/component/input/DepositsSelector/DepositsSelector";
import { config } from "config";
import { fireEvent, render } from "test-utils";

describe("Despoist selector test", () => {
    test("Renders correctly", async () => {
        const screen = render(<DepositsSelector deposits={MockedUnlockableAmounts} />);
        const item = screen.getByText("500 " + config.tokenName);
        expect(item).toBeDefined();
        fireEvent.press(item);
        const newDeposit = screen.getByText("50 " + config.tokenName);
        fireEvent.press(newDeposit);
        expect(screen.getAllByText("50 " + config.tokenName)).toHaveLength(2);
    });
});
