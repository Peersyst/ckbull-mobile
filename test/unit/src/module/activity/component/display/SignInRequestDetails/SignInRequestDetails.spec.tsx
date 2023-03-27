import { render, translate } from "test-utils";
import SignRequestAppSummary from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";
import { screen } from "@testing-library/react-native";
import { UseWalletStateMock } from "mocks/common";
import { wallet } from "images";

describe("SignInRequestDetails tests", () => {
    const mockName = "name";
    const mockImage = "image";
    const mockDescription = "description";

    beforeEach(() => jest.restoreAllMocks());

    test("Renders correctly without loading", () => {
        const walletState = new UseWalletStateMock();

        render(<SignRequestAppSummary name={mockName} image={mockImage} description={mockDescription} />);

        expect(screen.getByText(mockName)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.getByText(translate("signWith"))).not.toBeDisabled();
        expect(walletState.mock).toHaveBeenCalled();
    });
});
