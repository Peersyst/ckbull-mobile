import { render } from "test-utils";
import SendConfirmationScreen from "module/transaction/screen/SendConfirmationScreen/SendConfirmationScreen";
import * as UseWallet from "module/wallet/hook/useWallet";
import * as Recoil from "recoil";
import { mockedUseWallet } from "mocks/useWallet";
import { translate } from "locale";
import { formatAddress } from "@peersyst/react-utils";

describe("SendConfirmationScreen tests", () => {
    test("Renders correctly", () => {
        jest.spyOn(UseWallet, "default").mockReturnValue(mockedUseWallet);
        jest.spyOn(Recoil, "useRecoilValue").mockReturnValue({
            amount: "1000",
            fee: "10",
            senderAddress: mockedUseWallet.state.cells[0].address,
            receiverAddress: "receiver_address",
            message: "Send message",
        });

        const screen = render(<SendConfirmationScreen />);
        expect(screen.getByText("1,000")).toBeDefined();
        expect(screen.getByText(translate("transaction_fee_label") + ":")).toBeDefined();
        expect(screen.getByText("10")).toBeDefined();

        expect(screen.getByText(translate("from") + ":")).toBeDefined();
        expect(
            screen.getByText(
                mockedUseWallet.state.cells[0].name + " - " + formatAddress(mockedUseWallet.state.cells[0].address, "middle", 3),
            ),
        ).toBeDefined();
        expect(screen.getByText(translate("to") + ":")).toBeDefined();
        expect(screen.getByText("recei...ess")).toBeDefined();
        expect(screen.getByText(translate("message") + ":")).toBeDefined();
        expect(screen.getByText("Send message")).toBeDefined();
    });
});
