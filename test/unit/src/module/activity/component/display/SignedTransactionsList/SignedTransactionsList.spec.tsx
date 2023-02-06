import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";
import { render } from "test-utils";
import { UseServiceInstanceMock } from "mocks/common";
import * as useGetSignedTransactionRequest from "module/activity/queries/useGetSignedTransactionRequest";
import { screen, waitFor } from "@testing-library/react-native";

describe("SignedTransactionsList tests", () => {
    test("Renders correctly with signedTransactions", async () => {
        new UseServiceInstanceMock();
        const getSignedTransactionsRequestMock = jest.spyOn(useGetSignedTransactionRequest, "default");

        render(<SignedTransactionsList />);

        await waitFor(() => expect(getSignedTransactionsRequestMock).toHaveBeenCalled());
        expect(screen.getAllByTestId("ReceiveIcon")).toHaveLength(3);
    });
});
