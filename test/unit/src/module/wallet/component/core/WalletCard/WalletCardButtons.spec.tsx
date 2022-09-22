import { translate } from "locale";
import { render } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import * as Genesys from "@peersyst/react-native-components";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import ReceiveModal from "module/transaction/component/core/ReceiveModal/ReceiveModal";
import WalletCardButtons from "module/wallet/component/core/WalletCard/WalletCardButtons/WalletCardButtons";

describe("WalletCardButtons tests", () => {
    test("Renders correctly", () => {
        const screen = render(<WalletCardButtons />);
        expect(screen.getByText(translate("send"))).toBeDefined();
        expect(screen.getByTestId("ReceiveIcon")).toBeDefined();
        expect(screen.getByTestId("SendIcon")).toBeDefined();
        expect(screen.getByText(translate("receive"))).toBeDefined();
    });
    test("Triggers correctly send button", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal } as any);
        const screen = render(<WalletCardButtons />);
        const button = screen.getByText(translate("send"));
        fireEvent.press(button);
        expect(showModal).toHaveBeenCalledWith(SendModal);
    });
    test("Triggers correctly receive button", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal } as any);
        const screen = render(<WalletCardButtons />);
        const button = screen.getByText(translate("receive"));
        fireEvent.press(button);
        expect(showModal).toHaveBeenCalledWith(ReceiveModal);
    });
});
