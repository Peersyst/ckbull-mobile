import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";
import { render, screen, waitFor } from "test-utils";
import { UseServiceInstanceMock } from "mocks/common";
import * as useGetSignedTransactionRequest from "module/activity/queries/useGetSignedTransactions";

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
