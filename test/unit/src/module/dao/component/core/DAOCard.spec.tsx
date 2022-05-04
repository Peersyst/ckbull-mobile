import { translate } from "locale";
import DAOCard from "module/dao/component/core/DAOAccountCard/DAOCard";
import { render, SuccessApiCall } from "test-utils";
import { waitFor } from "@testing-library/react-native";
import { MockedDAOBalance } from "mocks/DAO";
import { CkbServiceMock } from "module/common/service/mock/CkbServiceMock";
import * as UseWalletState from "module/wallet/hook/useWalletState";
import { mockedUseWallet } from "mocks/useWalletState";

describe("Test for the DAO Card", () => {
    test("Renders correctly", async () => {
        jest.spyOn(UseWalletState, "default").mockReturnValue(mockedUseWallet);
        jest.spyOn(CkbServiceMock.prototype, "getDAOBalance").mockReturnValue(SuccessApiCall(MockedDAOBalance));
        jest.spyOn(CkbServiceMock.prototype, "getCKBBalance").mockReturnValue(
            SuccessApiCall({ totalBalance: BigInt(20000), occupiedBalance: BigInt(9600), freeBalance: BigInt(12635) }),
        );
        const screen = render(<DAOCard />);
        //Balance
        expect(screen.getByText(translate("available"))).toBeDefined();
        /**Account Balance */
        //This is 3 because of card + 2 of the modal
        await waitFor(() => expect(screen.getAllByText("12,635")).toHaveLength(3));
        expect(screen.getByText(translate("locked"))).toBeDefined();
        expect(screen.getByText("500")).toBeDefined();
        expect(screen.getByText(translate("current_apc"))).toBeDefined();
        expect(screen.getByText("100%")).toBeDefined();

        //Buttons
        expect(screen.getByText(translate("deposit"))).toBeDefined();
        expect(screen.getByTestId("DAODepositIcon")).toBeDefined();
        expect(screen.getByTestId("DAOWithdrawIcon")).toBeDefined();
        expect(screen.getByText(translate("withdraw"))).toBeDefined();

        //Header
        expect(screen.getByText("Nervos DAO"));
        expect(screen.getByTestId("FilledWalletIcon"));
        expect(screen.getByTestId("InfoIcon"));
    });
});
