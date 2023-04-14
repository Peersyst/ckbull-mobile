import { CompleteTransactionRequestDtoMock } from "mocks/common/activity/complete-transaction-request-dto.mock";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import { render, screen } from "test-utils";

describe("TransactionRequest", () => {
    test("Renders correctly", () => {
        const mockTransactionRequest = new CompleteTransactionRequestDtoMock();
        render(<TransactionRequest transaction={mockTransactionRequest} />);

        expect(screen.getByText(mockTransactionRequest.signInRequest.app.name)).toBeDefined();
        expect(screen.getByText(mockTransactionRequest.status)).toBeDefined();
    });
});
