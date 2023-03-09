import DepositItem from "module/dao/component/input/DepositsSelector/DepositItem/DepositItem";
import { config } from "config";
import { render, translate } from "test-utils";

describe("Test for the deposit Item", () => {
    test("Renders correctly", () => {
        const screen = render(
            <DepositItem
                value={0}
                selectedIndex={0}
                deposit={{
                    amount: BigInt(1000000000),
                    compensation: BigInt(0),
                    remainingCycleMinutes: 0,
                    remainingEpochs: 0,
                    txHash: "",
                    unlockable: false,
                    type: "deposit",
                }}
            />,
        );

        expect(screen.getByText("10 " + config.tokenName)).toBeDefined();
        expect(screen.getByText("(APC: 0%)")).toBeDefined();
        expect(screen.getByText(translate("compensation") + ":")).toBeDefined();
        expect(screen.getByText(translate("remaining_time") + ": 0 " + translate("epochs"))).toBeDefined();
    });
    test("Renders correctly", () => {
        const screen = render(
            <DepositItem
                deposit={{
                    amount: BigInt(10 * 10 ** 8),
                    compensation: BigInt(1 * 10 ** 8),
                    remainingCycleMinutes: 0,
                    remainingEpochs: 0,
                    txHash: "",
                    unlockable: true,
                    type: "deposit",
                }}
                value={0}
                selectedIndex={0}
            />,
        );

        expect(screen.getByText("10 " + config.tokenName)).toBeDefined();
        expect(screen.getByText("(APC: 10%)")).toBeDefined();
        expect(screen.getByText(translate("compensation") + ":")).toBeDefined();
        expect(screen.getByText("1")).toBeDefined();
        expect(screen.getByText(translate("available"))).toBeDefined();
    });
});
