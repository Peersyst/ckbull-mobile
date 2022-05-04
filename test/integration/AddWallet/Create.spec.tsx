import { render, SuccessApiCall, wait } from "test-utils";
import CreateWalletModal from "module/wallet/component/core/CreateWalletModal/CreateWalletModal";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { translate } from "locale";
import { act } from "react-dom/test-utils";
import * as GenerateMnemonic from "module/wallet/mock/generateMnemonic";
import { StorageWallet, WalletStorage } from "module/wallet/WalletStorage";
import * as UseWalletState from "module/wallet/hook/useWalletState";
import createUseWalletStateMock from "mocks/useWalletState";

describe("AddWallet - Create", () => {
    jest.setTimeout(20000);
    test("Adds a created wallet successfully", async () => {
        jest.spyOn(GenerateMnemonic, "default").mockReturnValue(["Pizza", "Taco", "Fries"]);
        const addWalletToStorage = jest
            .spyOn(WalletStorage, "addWallet")
            .mockImplementation((wallet: Omit<StorageWallet, "index">) => SuccessApiCall({ ...wallet, index: 1 }));
        const setWalletState = jest.fn();
        jest.spyOn(UseWalletState, "default").mockReturnValue(createUseWalletStateMock({ setState: setWalletState }));

        const screen = render(<CreateWalletModal />);

        fireEvent.changeText(screen.getByPlaceholderText(translate("wallet_name")), "New wallet");
        fireEvent.press(screen.getByText(translate("next")));

        await waitFor(() => expect(screen.getByText(translate("advise1_title"))).toBeDefined());
        await act(() => wait(5500));
        fireEvent.press(screen.getByText(translate("next")));
        expect(screen.getByText(translate("advise2_title"))).toBeDefined();
        await act(() => wait(5500));
        fireEvent.press(screen.getByText(translate("next")));
        expect(screen.getByText(translate("advise3_title"))).toBeDefined();
        await act(() => wait(5500));
        fireEvent.press(screen.getByText(translate("generate_mnemonic")));

        expect(screen.getByText(translate("keep_this_safe"))).toBeDefined();
        fireEvent.press(screen.getByText(translate("next")));

        fireEvent.press(screen.getByText("Pizza"));
        fireEvent.press(screen.getByText("Taco"));
        fireEvent.press(screen.getByText("Fries"));

        await waitFor(() =>
            expect(addWalletToStorage).toHaveBeenCalledWith({
                name: "New wallet",
                mnemonic: ["Pizza", "Taco", "Fries"],
                colorIndex: undefined,
            }),
        );
        await waitFor(() => expect(setWalletState).toHaveBeenCalled());
    });
});
