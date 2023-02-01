import DAOCardButtons from "module/dao/component/core/DAOAccountCard/DAOCardButtons/DAOCardButtons";
import { fireEvent, render } from "test-utils";
import * as Genesys from "@peersyst/react-native-components";
import DepositModal from "module/dao/component/core/DepositModal/DepositModal";
import WithdrawModal from "module/dao/component/core/WithdrawModal/WithdrawModal";

describe("Test for the DoaCardBalance", () => {
    test("Returns correctly", () => {
        const screen = render(<DAOCardButtons />);
        expect(screen.getByTestId("DepositIcon")).toBeDefined();
        expect(screen.getByTestId("WithdrawalIcon")).toBeDefined();
    });
    test("Triggers deposit function correctly", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal } as any);
        const screen = render(<DAOCardButtons />);
        const button = screen.getByTestId("DepositIcon");
        fireEvent.press(button);
        expect(showModal).toHaveBeenCalledWith(DepositModal);
    });
    test("Triggers withdraw function correctly", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal } as any);
        const screen = render(<DAOCardButtons />);
        const button = screen.getByTestId("WithdrawalIcon");
        fireEvent.press(button);
        expect(showModal).toHaveBeenCalledWith(WithdrawModal);
    });
});
