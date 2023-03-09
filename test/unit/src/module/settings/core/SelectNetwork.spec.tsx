import SelectNetwork from "module/settings/components/core/SelectNetwork/SelectNetwork";
import { fireEvent, render, translate } from "test-utils";
import * as Recoil from "recoil";
import { defaultSettingsState } from "module/settings/state/SettingsState";
import { SettingsStorage } from "module/settings/SettingsStorage";
import { capitalize } from "@peersyst/react-utils";

describe("Test for the select network", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });
    test("Returns correctly", () => {
        const screen = render(<SelectNetwork />);
        expect(screen.getByText(translate("select_your_network"))).toBeDefined();
        expect(screen.getByText(translate("network_name", { name: capitalize(defaultSettingsState.network) }))).toBeDefined();
    });
    test("Change the network correctly", async () => {
        const setSettingsState = jest.fn();
        const mockedRecoilState = [{ network: "mainnet" }, setSettingsState];
        jest.spyOn(Recoil, "useRecoilState").mockReturnValue(mockedRecoilState as any);
        const setSettingsStorage = jest.spyOn(SettingsStorage, "set").mockResolvedValue();
        const screen = render(<SelectNetwork />);
        const oppositeNetwork = defaultSettingsState.network === "mainnet" ? "testnet" : "mainnet";
        const testnetItem = screen.getByText(translate("network_name", { name: capitalize(defaultSettingsState.network) }));
        fireEvent.press(testnetItem); //open modal
        const mainnetItem = await screen.findByText(translate("network_name", { name: capitalize(oppositeNetwork) }));
        fireEvent.press(mainnetItem); //select the mainnet

        expect(setSettingsStorage).toHaveBeenCalledWith({ network: oppositeNetwork });
        expect(setSettingsState).toHaveBeenCalled();
    });
});
