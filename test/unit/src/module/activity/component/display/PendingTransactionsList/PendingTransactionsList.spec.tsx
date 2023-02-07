import { UseServiceInstanceMock } from "mocks/common";
import * as useGetPendingTransactionRequest from "module/activity/queries/useGetPendingTransactions";
import PendingTransactionsList from "module/activity/component/display/PendingTransactionsList/PendingTransactionsList";
import { render } from "test-utils";
import { screen, waitFor } from "@testing-library/react-native";

describe("PendingTransactionsList tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    test("Renders correctly with pendingTransactions", async () => {
        const getPendingTransactionsRequestMock = jest.spyOn(useGetPendingTransactionRequest, "default");
        render(<PendingTransactionsList />);
        await waitFor(() => expect(getPendingTransactionsRequestMock).toHaveBeenCalled());
        expect(screen.getByText("Tue 07 Feb, 2023")).toBeDefined();
        expect(screen.getByText("Thu 05 Apr, 2007")).toBeDefined();
        expect(screen.getAllByText("Figma")).toHaveLength(7);
    });
});
