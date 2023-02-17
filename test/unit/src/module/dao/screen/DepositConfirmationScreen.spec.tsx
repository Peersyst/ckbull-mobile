import { render, translate } from "test-utils";
import * as Recoil from "recoil";
import { formatHash } from "@peersyst/react-utils";
import DepositConfirmationScreen from "module/dao/screen/DepositConfirmationScreen/DepositConfirmationScreen";
import { MOCKED_ADDRESS, UseServiceInstanceMock, UseSettingsMock, UseWalletStateMock } from "test-mocks";
import { config } from "config";

describe("DepositConfirmationScreen tests", () => {
    test("Renders correctly", () => {
        new UseServiceInstanceMock();
        new UseSettingsMock();
        const mockedWallet = new UseWalletStateMock().state.wallets[0];

        jest.spyOn(Recoil, "useRecoilValue").mockReturnValue({
            amount: "1000",
            senderWalletIndex: mockedWallet.index,
        });

        const screen = render(<DepositConfirmationScreen />);
        expect(screen.getByText(`1,000 ${config.tokenName}`)).toBeDefined();

        expect(screen.getByText(`0.001 ${config.tokenName}`)).toBeDefined();

        expect(screen.getByText(`1,000.001 ${config.tokenName}`)).toBeDefined();
        expect(screen.getByText(translate("from"))).toBeDefined();
        expect(screen.getByText(mockedWallet.name + " - " + formatHash(MOCKED_ADDRESS, "middle", 3))).toBeDefined();
    });
});
