import { fireEvent } from "@testing-library/react-native";
import { config } from "config";
import DepositSetAmountScreen from "module/dao/screen/DepositSetAmountScreen/DepositSetAmountScreen";
import { render, screen, translate } from "test-utils";
import * as Recoil from "recoil";
import { UseGetCKBBalanceMock, UseSettingsMock, UseWalletStateMock } from "test-mocks";

describe("DepositConfirmationScreen tests", () => {
    const mockedWallet = new UseWalletStateMock().state.wallets[0];
    new UseGetCKBBalanceMock({ freeBalance: 1200 });
    new UseSettingsMock();
    jest.spyOn(Recoil, "useRecoilValue").mockReturnValue({
        amount: "1000",
        senderWalletIndex: mockedWallet.index,
    });

    test("Renders correctly", async () => {
        render(<DepositSetAmountScreen />);
        expect(screen.getByTestId("ActivityIndicator")).toBeDefined();
        const input = await screen.findByPlaceholderText(translate("enter_amount"));

        expect(input).toBeDefined();
        expect(
            screen.getByText(translate("deposit_warning", { dao_min_deposit: config.minimumDaoDeposit, token: config.tokenName })),
        ).toBeDefined();
        fireEvent.changeText(input, (config.minimumDaoDeposit - 1).toString());
        expect(
            screen.getByText(
                translate("invalid_number_gte", {
                    n: config.minimumDaoDeposit + " " + config.tokenName,
                    ns: "error",
                }),
            ),
        );
        fireEvent.changeText(input, config.minimumDaoDeposit.toString());
        expect(
            screen.queryByText(
                translate("invalid_number_gte", {
                    n: config.minimumDaoDeposit + " " + config.tokenName,
                    ns: "error",
                }),
            ),
        ).toBeNull();
    });
});
