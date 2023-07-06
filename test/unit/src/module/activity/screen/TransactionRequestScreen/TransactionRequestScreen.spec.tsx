import { CompleteTransactionRequestDtoMock } from "mocks/common/activity/complete-transaction-request-dto.mock";
import TransactionRequestScreen from "module/activity/screen/TransactionRequestScreen/TransactionRequestScreen";
import { render, screen, translate } from "test-utils";
import { UseServiceInstanceMock, UseWalletStateMock } from "test-mocks";

describe("TransactionRequestScreen tests", () => {
    let transactionRequestMock: CompleteTransactionRequestDtoMock;
    let serviceInstanceMock: UseServiceInstanceMock;
    let walletStateMock: UseWalletStateMock;

    beforeEach(() => {
        transactionRequestMock = new CompleteTransactionRequestDtoMock();
        serviceInstanceMock = new UseServiceInstanceMock();
        walletStateMock = new UseWalletStateMock();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        serviceInstanceMock.restore();
        walletStateMock.restore();
    });

    test("Renders correctly", async () => {
        render(<TransactionRequestScreen transactionRequest={transactionRequestMock} />);

        expect(screen.getByText(translate("confirmTransaction"))).toBeDefined();
    });
});
