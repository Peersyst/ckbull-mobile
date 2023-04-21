import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";
import { render, waitFor, formatDate, screen, translate } from "test-utils";
import { UseServiceInstanceMock } from "mocks/common";
import { TransactionRequestService } from "module/api/service";
import { CompleteTransactionRequestDtoMock } from "mocks/common/activity/complete-transaction-request-dto.mock";
import { transactions } from "mocks/transaction";

describe("SignedTransactionsList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with signedTransactions", async () => {
        const mockCompleteTransactionRequestDto = new CompleteTransactionRequestDtoMock({ status: "signed" });

        const getSignedTransactionsMock = jest
            .spyOn(TransactionRequestService, "getTransactionRequests")
            .mockResolvedValueOnce([mockCompleteTransactionRequestDto]);
        const getTransactionMock = jest.spyOn(serviceInstance.serviceInstance, "getTransaction").mockResolvedValueOnce(transactions[0]);

        render(<SignedTransactionsList />);

        await waitFor(() => expect(getSignedTransactionsMock).toHaveBeenCalled());
        await waitFor(() => expect(getTransactionMock).toHaveBeenCalled());
        expect(screen.getByText(formatDate(transactions[0].timestamp)));
    });

    test("Renders correctly without signedTransactions", async () => {
        const getSignedTransactionsMock = jest.spyOn(TransactionRequestService, "getTransactionRequests").mockResolvedValueOnce([]);

        render(<SignedTransactionsList />);

        await waitFor(() => expect(getSignedTransactionsMock).toHaveBeenCalled());
        expect(screen.getByText(translate("noSignedTransactions"))).toBeDefined();
    });
});
