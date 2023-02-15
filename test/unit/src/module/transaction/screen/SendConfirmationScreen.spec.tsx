import { render, translate } from "test-utils";
import SendConfirmationScreen from "module/transaction/screen/SendConfirmationScreen/SendConfirmationScreen";
import * as Recoil from "recoil";
import { formatHash } from "@peersyst/react-utils";
import { config } from "config";
import { MOCKED_ADDRESS, UseServiceInstanceMock, UseWalletStateMock } from "test-mocks";
import { SendStateMock } from "mocks/common/transaction/sendState.mock";
import * as UseSettings from "module/settings/hook/useSettings";
import { defaultSettingsState } from "module/settings/state/SettingsState";

describe("SendConfirmationScreen tests", () => {
    new UseServiceInstanceMock();
    const { state } = new UseWalletStateMock();
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", () => {
        const sendState = new SendStateMock({ amount: "1000", message: "Send message" });
        jest.spyOn(Recoil, "useRecoilValue").mockReturnValue(sendState);
        jest.spyOn(UseSettings, "useSettings").mockReturnValue(defaultSettingsState);

        const screen = render(<SendConfirmationScreen />);
        expect(screen.getByText(`1,000 ${config.tokenName}`)).toBeDefined();

        expect(screen.getByText(`0.001 ${config.tokenName}`)).toBeDefined();

        expect(screen.getByText(`1,000.001 ${config.tokenName}`)).toBeDefined();

        expect(screen.getByText(translate("from"))).toBeDefined();
        expect(screen.getByText(state.wallets[0].name + " - " + formatHash(MOCKED_ADDRESS, "middle", 3))).toBeDefined();
        expect(screen.getByText(translate("to"))).toBeDefined();
        expect(screen.getByText(formatHash(MOCKED_ADDRESS, "middle", 3))).toBeDefined();
        expect(screen.getByText(translate("message"))).toBeDefined();
        expect(screen.getByText("Send message")).toBeDefined();
    });
});
