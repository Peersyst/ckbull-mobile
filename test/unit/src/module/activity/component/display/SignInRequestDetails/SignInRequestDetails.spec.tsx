import { render, translate } from "test-utils";
import SignRequestAppSummary from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";
import { screen } from "@testing-library/react-native";
import { UseWalletStateMock } from "mocks/common";

describe("SignInRequestDetails tests", () => {
    const mockName = "name";
    const mockImage = "image";
    const mockDescription = "description";
    const mockRequestTitle = "requestTitle";

    beforeEach(() => jest.restoreAllMocks());

    test("Renders correctly without a selectedWallet", () => {
        render(<SignRequestAppSummary requestTitle={mockRequestTitle} name={mockName} image={mockImage} description={mockDescription} />);

        expect(screen.getByText(mockRequestTitle)).toBeDefined();
        expect(screen.getByText(mockName)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.queryByText(translate("signWith"))).toBeNull();
    });

    test("Renders correctly if there is a selectedWallet", () => {
        const walletState = new UseWalletStateMock();

        render(
            <SignRequestAppSummary
                requestTitle={mockRequestTitle}
                name={mockName}
                image={mockImage}
                description={mockDescription}
                selectedWallet={1}
                onWalletChange={jest.fn}
            />,
        );

        expect(screen.getByText(mockRequestTitle)).toBeDefined();
        expect(screen.getByText(mockName)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.getByText(translate("signWith"))).not.toBeDisabled();
        expect(walletState.mock).toHaveBeenCalled();
    });
});
