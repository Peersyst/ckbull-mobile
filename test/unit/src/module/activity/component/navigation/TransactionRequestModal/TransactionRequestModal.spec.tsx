import { CompleteTransactionRequestDtoMock } from "mocks/common/activity/complete-transaction-request-dto.mock";
import TransactionRequestModal from "module/activity/component/navigation/TransactionRequestModal/TransactionRequestModal";
import TransactionRequestScreen from "module/activity/screen/TransactionRequestScreen/TransactionRequestScreen";
import { UseServiceInstanceMock } from "test-mocks";
import { render, screen, translate } from "test-utils";

jest.mock("module/activity/screen/TransactionRequestScreen/TransactionRequestScreen");

describe("TransactionRequestModal tests", () => {
    let mockTransactionRequest: CompleteTransactionRequestDtoMock;
    let serviceInstanceMock: UseServiceInstanceMock;

    beforeEach(() => {
        mockTransactionRequest = new CompleteTransactionRequestDtoMock();
        serviceInstanceMock = new UseServiceInstanceMock();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        serviceInstanceMock.restore();
    });

    test("Renders correctly", () => {
        render(<TransactionRequestModal transactionRequest={mockTransactionRequest} />);

        expect(screen.getByText(translate("signTransactionRequest"))).toBeDefined();
        expect(TransactionRequestScreen).toHaveBeenCalled();
    });
});
