import { render, translate } from "test-utils";
import TransactionLabel from "module/transaction/component/display/TransactionLabel/TransactionLabel";
import { transaction } from "mocks/transaction";

describe("TransactionLabel tests", () => {
    test("Renders correctly", () => {
        const screen = render(<TransactionLabel transaction={transaction} variant="body1" />);

        expect(screen.getByText(translate("CKB_sent"))).toBeDefined();
    });
});
