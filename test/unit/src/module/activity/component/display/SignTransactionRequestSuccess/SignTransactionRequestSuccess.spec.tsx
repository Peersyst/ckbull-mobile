import { capitalize } from "@peersyst/react-utils";
import SignTransactionRequestSuccess from "module/activity/component/display/SignTransactionRequestSuccess/SignTransactionRequestSuccess";
import { Linking } from "react-native";
import { fireEvent, render, screen, translate } from "test-utils";
import { UseServiceInstanceMock } from "../../../../../../../__mocks__/common/wallet/useServiceInstance.mock";

describe("SignTransactionRequestSuccess tests", () => {
    const mockTransactionHash = "transactionHash";
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => serviceInstance.restore());

    test("Renders correctly", () => {
        serviceInstance = new UseServiceInstanceMock();
        render(<SignTransactionRequestSuccess transactionHash={mockTransactionHash} />);

        expect(screen.getByText(capitalize(translate("transaction")))).toBeDefined();
        expect(screen.getByText(mockTransactionHash)).toBeDefined();
        expect(screen.getByText(capitalize(translate("copy")))).toBeDefined();
        expect(screen.getByText(translate("seeInExplorer"))).toBeDefined();
    });

    test("Calls openURL with mainnet explorer", () => {
        serviceInstance = new UseServiceInstanceMock({ network: "mainnet" });
        const openUrl = jest.spyOn(Linking, "openURL");

        render(<SignTransactionRequestSuccess transactionHash={mockTransactionHash} />);

        const explorerButton = screen.getByText(translate("seeInExplorer"));
        expect(explorerButton).toBeDefined();

        fireEvent.press(explorerButton);

        expect(openUrl).toHaveBeenCalledWith(`https://explorer.nervos.org/transaction/${mockTransactionHash}`);
    });

    test("Calls openURL with testnet explorer", () => {
        serviceInstance = new UseServiceInstanceMock({ network: "testnet" });
        const openUrl = jest.spyOn(Linking, "openURL");

        render(<SignTransactionRequestSuccess transactionHash={mockTransactionHash} />);

        const explorerButton = screen.getByText(translate("seeInExplorer"));
        expect(explorerButton).toBeDefined();

        fireEvent.press(explorerButton);

        expect(openUrl).toHaveBeenCalledWith(`https://pudge.explorer.nervos.org/transaction/${mockTransactionHash}`);
    });
});
