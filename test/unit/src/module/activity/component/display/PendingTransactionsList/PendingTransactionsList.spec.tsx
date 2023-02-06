import { UseServiceInstanceMock } from "mocks/common";
import * as useGetPendingTransactionRequest from "module/activity/queries/useGetPendingTransactionRequest";
import PendingTransactionsList from "module/activity/component/display/PendingTransactionsList/PendingTransactionsList";
import { render, translate } from "test-utils";
import { screen, waitFor } from "@testing-library/react-native";

describe("PendingTransactionsList tests", () => {
    test("Renders correctly with pendingTransactions", async () => {
        new UseServiceInstanceMock();
        const getPendingTransactionsRequestMock = jest.spyOn(useGetPendingTransactionRequest, "default");

        render(<PendingTransactionsList />);
        await waitFor(() => expect(getPendingTransactionsRequestMock).toHaveBeenCalled());
        expect(screen.getByText(translate("today"))).toBeDefined();
        expect(screen.getAllByText("Figma")).toHaveLength(5);
        expect(screen.getByText("7/11/2019")).toBeDefined();
    });
});
