import SignerTransactionSummary from "module/activity/component/display/SignerTransactionSummary/SignerTransactionSummary";
import { render, screen, translate } from "test-utils";
import { formatHash } from "@peersyst/react-utils";

describe("SignerTransactionSummary tests", () => {
    test("Renders correctly", () => {
        render(<SignerTransactionSummary senders={["sendAddress"]} receivers={["receiverAddress"]} amount={100} showTotal />);

        expect(screen.getByText(translate("from"))).toBeDefined();
        expect(screen.getByText(formatHash("sendAddress", "middle", 3))).toBeDefined();
        expect(screen.getByText(translate("to"))).toBeDefined();
        expect(screen.getByText(formatHash("receiverAddress", "middle", 3))).toBeDefined();
    });

    test("Renders correctly without senders", () => {
        render(<SignerTransactionSummary senders={[]} receivers={["receiverAddress"]} amount={100} showTotal />);
        expect(screen.queryByText(translate("from"))).toBeNull();
        expect(screen.queryByText("sendAddress")).toBeNull();
    });

    test("Renders correctly without receivers", () => {
        render(<SignerTransactionSummary senders={["sendAddress"]} receivers={[]} amount={100} showTotal />);
        expect(screen.queryByText(translate("to"))).toBeNull();
        expect(screen.queryByText("receiverAddress")).toBeNull();
    });
});
