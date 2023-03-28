import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";
import { render } from "test-utils";
import { UseServiceInstanceMock } from "mocks/common";

describe("SignedTransactionsList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with signedTransactions", async () => {
        render(<SignedTransactionsList />);
    });
});
