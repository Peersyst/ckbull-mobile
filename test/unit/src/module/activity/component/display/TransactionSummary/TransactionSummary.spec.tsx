import SignerTransactionSummary from "module/activity/component/display/SignerTransactionSummary/SignerTransactionSummary";
import { render, screen, translate } from "test-utils";
import { formatHash } from "@peersyst/react-utils";
import { TransactionDtoMock, mockedAddress } from "mocks/common/activity/transaction-dto.mock";
import { UseServiceInstanceMock } from "mocks/common";

describe("SignerTransactionSummary tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });
    test("Renders correctly", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={transaction} showTotal />);

        expect(screen.getByText(translate("from"))).toBeDefined();
        expect(formatHash(mockedAddress, "middle", 3)).toBeDefined();
        expect(screen.getByText(translate("to"))).toBeDefined();
        expect(formatHash(mockedAddress, "middle", 3)).toBeDefined();
    });

    test("Renders correctly without senders", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={{ ...transaction, inputs: [] }} showTotal />);
        expect(screen.queryByText(translate("from"))).toBeNull();
        expect(screen.queryByText(mockedAddress)).toBeNull();
    });

    test("Renders correctly without receivers", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={{ ...transaction, outputs: [] }} showTotal />);
        expect(screen.queryByText(translate("to"))).toBeNull();
        expect(screen.queryByText(mockedAddress)).toBeNull();
    });
});
