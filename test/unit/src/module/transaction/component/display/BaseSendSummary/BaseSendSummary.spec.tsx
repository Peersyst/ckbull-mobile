import { translate } from "locale";
import BaseSendSummary from "module/transaction/component/display/BaseSendSummary/BaseSendSummary";
import { Typography } from "react-native-components";
import { render } from "test-utils";

describe("Test for the BaseSendSummary", () => {
    test("Renders correctly", () => {
        const screen = render(<BaseSendSummary balance={"1000"} fee={"10"} children={<Typography variant="body1">Children</Typography>} />);
        expect(screen.getByText("1,000")).toBeDefined();
        expect(screen.getByText(translate("transaction_fee_label") + ":")).toBeDefined();
        expect(screen.getByText("10")).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });
});
