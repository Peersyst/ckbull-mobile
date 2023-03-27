import { UseServiceInstanceMock } from "mocks/common";
import PendingTransactionsList from "module/activity/component/display/PendingTransactionsList/PendingTransactionsList";
import { render } from "test-utils";
import { screen, waitFor } from "@testing-library/react-native";
import { CompleteTransactionRequestDtoMock } from "mocks/common/activity/complete-transaction-request-dto.mock";
import { TransactionRequestService } from "module/api/service";
import useFormatDate from "module/common/hook/useFormatDate";

describe("PendingTransactionsList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with pendingTransactions", async () => {
        const mockCompleteTransactionRequestDtoMock = new CompleteTransactionRequestDtoMock();

        const getPendingTransactionsRequestMock = jest
            .spyOn(TransactionRequestService, "getTransactionRequests")
            .mockResolvedValueOnce([mockCompleteTransactionRequestDtoMock, mockCompleteTransactionRequestDtoMock]);
        render(<PendingTransactionsList />);
        await waitFor(() => expect(getPendingTransactionsRequestMock).toHaveBeenCalled());
        expect(screen.getAllByText("name")).toHaveLength(2);
        expect(screen.getAllByText("pending")).toHaveLength(2);
    });
});
