import { render, translate, formatDate } from "test-utils";
import TransactionCard from "module/transaction/component/display/TransactionCard/TransactionCard";
import { transaction } from "mocks/transaction";
import * as Recoil from "recoil";
import * as useGetTokenPrice from "module/token/query/useGetTokenPrice";

describe("TransactionCard tests", () => {
    beforeAll(() => {
        jest.spyOn(Recoil, "useRecoilValue").mockReturnValue({ fiat: "eur" });
        jest.spyOn(useGetTokenPrice, "useGetTokenPrice").mockReturnValue({ data: 10 } as any);
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly with amount", async () => {
        const screen = render(<TransactionCard transaction={transaction} />);
        expect(screen.getByText(formatDate(transaction.timestamp))).toBeDefined();
        expect(screen.getByText(translate("CKB_sent"))).toBeDefined();
        expect(screen.getByTestId("SendIcon")).toBeDefined();
    });
});
