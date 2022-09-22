import * as UseCreateWallet from "module/wallet/hook/useCreateWallet";
import Recoil from "recoil";
import { render } from "test-utils";
import AddWallet from "module/wallet/component/core/AddWallet/AddWallet";
import { translate } from "locale";
import { fireEvent } from "@testing-library/react-native";
import * as Genesys from "@peersyst/react-native-components";
import CreateWalletModal from "module/wallet/component/core/CreateWalletModal/CreateWalletModal";
import ImportWalletModal from "module/wallet/component/core/ImportWalletModal/ImportWalletModal";
import createUseCreateWalletMock from "mocks/useCreateWalletMock";

describe("AddWallet tests", () => {
    test("Renders correctly", () => {
        const setColorIndex = jest.fn();
        jest.spyOn(UseCreateWallet, "default").mockReturnValue({
            state: { name: undefined, pin: undefined, mnemonic: undefined, colorIndex: undefined },
            setName: jest.fn(),
            setPin: jest.fn(),
            setMnemonic: jest.fn(),
            setColorIndex,
            reset: jest.fn(),
        });
        const resetCreateWalletState = jest.fn();
        jest.spyOn(Recoil, "useResetRecoilState").mockReturnValue(resetCreateWalletState);

        const screen = render(<AddWallet />);

        expect(setColorIndex).toHaveBeenCalled();
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(8); // 6 from color picker, create wallet and import wallet
        expect(screen.getByText(translate("create_a_wallet"))).toBeDefined();
        expect(screen.getByText(translate("import_a_wallet"))).toBeDefined();

        fireEvent.press(buttons[1]);
        expect(setColorIndex).toHaveBeenCalledWith(1);
    });

    test("Shows create wallet", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal, hideModal: jest.fn(), isModalActive: jest.fn() });
        jest.spyOn(UseCreateWallet, "default").mockReturnValue(createUseCreateWalletMock({ state: { colorIndex: 0 } }));

        const screen = render(<AddWallet />);
        fireEvent.press(screen.getByText(translate("create_a_wallet")));
        expect(showModal).toHaveBeenCalledWith(CreateWalletModal);
    });

    test("Shows import wallet", () => {
        const showModal = jest.fn();
        jest.spyOn(Genesys, "useModal").mockReturnValue({ showModal, hideModal: jest.fn(), isModalActive: jest.fn() });
        jest.spyOn(UseCreateWallet, "default").mockReturnValue(createUseCreateWalletMock({ state: { colorIndex: 0 } }));

        const screen = render(<AddWallet />);
        fireEvent.press(screen.getByText(translate("import_a_wallet")));
        expect(showModal).toHaveBeenCalledWith(ImportWalletModal);
    });
});
