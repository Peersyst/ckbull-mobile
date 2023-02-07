import { render, translate } from "test-utils";
import { screen } from "@testing-library/react-native";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import { TransactionRequestMock } from "mocks/common";
import { getTimeFromSeconds } from "module/activity/utils/time";

describe("Tests for ConnectedSite", () => {
    test("Renders status signed", () => {
        const transactionRequestMock = new TransactionRequestMock({ status: "signed" });
        render(<TransactionRequest transaction={transactionRequestMock} />);

        expect(screen.getByText(translate("signed"))).toHaveStyle({ color: "#1ED882" });
    });

    test("Renders status pending", () => {
        const { hours, minutes, seconds } = getTimeFromSeconds(2000);
        const transactionRequestMock = new TransactionRequestMock({ status: "pending", expiresAt: 2000 });
        render(<TransactionRequest transaction={transactionRequestMock} />);

        expect(screen.getByText(translate("pending"))).toHaveStyle({ color: "#A7A7A7" });
        expect(screen.getByText(translate("expireDate", { hours, minutes, seconds }))).toBeDefined();
    });

    test("Renders status expired", () => {
        const transactionRequestMock = new TransactionRequestMock({ status: "expired" });
        render(<TransactionRequest transaction={transactionRequestMock} />);

        expect(screen.getByText(translate("expired"))).toHaveStyle({ color: "#FF1717" });
    });
});
