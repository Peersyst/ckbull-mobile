import { render, translate } from "test-utils";
import TransactionDetailsModal from "module/transaction/component/core/TransactionDetailsModal/TransactionDetailsModal";
import { receivedTransaction, sentTransaction } from "mocks/transaction";
import { config } from "config";
import { ACTION_LABEL } from "module/wallet/component/display/Balance/utils/actionLabels";
import transactionTypeToBalanceAction from "module/transaction/component/display/TransactionAmount/utils/transactionTypeToBalanceAction";

describe("TransactionDetailsModal test", () => {
    test("Renders Send correctly", () => {
        const action = transactionTypeToBalanceAction(sentTransaction.type) || "display";
        const screen = render(<TransactionDetailsModal transaction={sentTransaction} />);
        //Header
        expect(screen.getByTestId("SendIcon")).toBeDefined();
        expect(screen.getByText(translate("CKB_sent"))).toBeDefined();

        expect(screen.getByText(ACTION_LABEL[action!] + sentTransaction.amount + " " + config.tokenName)).toBeDefined();
        //Body
        expect(screen.getByText(translate("receiver"))).toBeDefined();

        expect(screen.getByText(translate("hash"))).toBeDefined();
        expect(screen.getByText(sentTransaction.transactionHash)).toBeDefined();
    });

    test("Renders Receive correctly", () => {
        const action = transactionTypeToBalanceAction(receivedTransaction.type);
        const screen = render(<TransactionDetailsModal transaction={receivedTransaction} />);
        //HEADER
        expect(screen.getByTestId("ReceiveIcon")).toBeDefined();
        expect(screen.getByText(translate("CKB_received"))).toBeDefined();
        expect(screen.getByText(ACTION_LABEL[action!] + receivedTransaction.amount + " " + config.tokenName)).toBeDefined();
        //BODY
        expect(screen.getByText(translate("hash"))).toBeDefined();
        expect(screen.getByText(receivedTransaction.transactionHash)).toBeDefined();
    });
});
