import { render } from "test-utils";
import TransactionAmount from "module/transaction/component/display/TransactionAmount/TransactionAmount";
import { TransactionType } from "ckb-peersyst-sdk";
import { config } from "config";
import { ACTION_LABEL } from "module/wallet/component/display/Balance/utils/actionLabels";
import { transaction, txWithTokenAmount } from "mocks/transaction";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";

describe("TransactionAmount tests", () => {
    test("Renders add", () => {
        const screen = render(
            <TransactionAmount transaction={{ ...transaction, type: TransactionType.RECEIVE_NATIVE_TOKEN }} variant={"button"} />,
        );
        expect(screen.getByText(ACTION_LABEL["add"] + "100 " + config.tokenName)).toBeDefined();
    });
    test("Renders display", () => {
        const screen = render(<TransactionAmount transaction={transaction} variant={"button"} />);
        expect(screen.getByText("100 " + config.tokenName)).toBeDefined();
    });
    test("Renders tokenAmount", () => {
        const screen = render(<TransactionAmount transaction={txWithTokenAmount} variant={"button"} />);
        screen.debug();
        expect(
            screen.getByText(
                BNToNumber(txWithTokenAmount.tokenAmount || 0, txWithTokenAmount.tokenType?.decimals) + " " + txWithTokenAmount.token,
            ),
        ).toBeDefined();
    });
});
