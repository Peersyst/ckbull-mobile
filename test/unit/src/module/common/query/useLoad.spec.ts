import { useLoad } from "module/common/query/useLoad";
import { WalletStorage } from "module/wallet/WalletStorage";
import { useRecoilValue } from "recoil";
import { renderHook, waitFor } from "test-utils";
import walletState from "module/wallet/state/WalletState";
import settingsState, { defaultSettingsState } from "module/settings/state/SettingsState";

const renderUseLoad = () =>
    renderHook(() => {
        const loading = useLoad();
        const { hasWallet, wallets, isAuthenticated } = useRecoilValue(walletState);
        const settings = useRecoilValue(settingsState);
        return { loading, hasWallet, wallets, isAuthenticated, settings };
    });

describe("useLoad tests", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Loads without wallets", async () => {
        const getWallets = jest.spyOn(WalletStorage, "getWallets").mockImplementation(() => new Promise((resolve) => resolve(undefined)));
        const { result } = renderUseLoad();
        expect(result.current.loading).toBe(true);
        expect(getWallets).toHaveBeenCalled();
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.wallets).toHaveLength(0);
        expect(result.current.hasWallet).toBe(false);
    });

    test("Loads with a wallet", async () => {
        const getWallets = jest
            .spyOn(WalletStorage, "getWallets")
            .mockImplementation(() => new Promise((resolve) => resolve([{ name: "wallet", mnemonic: ["a"], index: 0, colorIndex: 0 }])));
        const { result } = renderUseLoad();
        expect(result.current.loading).toBe(true);
        expect(getWallets).toHaveBeenCalled();
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.hasWallet).toBe(true);
        expect(result.current.wallets[0].name).toEqual("wallet");
        expect(result.current.settings).toEqual(defaultSettingsState);
    });
});
