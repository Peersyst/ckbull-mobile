import { render, translate } from "test-utils";
import { screen } from "@testing-library/react-native";
import { UseServiceInstanceMock, UseWalletStateMock } from "mocks/common";
import { SignInRequestDtoMock } from "mocks/common/activity/sign-in-request-dto.mock";
import SignInRequestDetails from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary";

describe("SignInRequestDetails tests", () => {
    let useServiceInstanceMock: UseServiceInstanceMock;

    beforeEach(() => {
        useServiceInstanceMock = new UseServiceInstanceMock();
    });

    afterEach(() => useServiceInstanceMock.restore());

    test("Renders correctly without a selectedWallet", () => {
        const signInRequestMock = new SignInRequestDtoMock();
        render(<SignInRequestDetails requestTitle="requestTitle" app={signInRequestMock.app} />);
        const { name, description } = signInRequestMock.app;

        expect(screen.getByText("requestTitle")).toBeDefined();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.queryByText(translate("signWith"))).toBeNull();
    });

    test("Renders correctly if there is a selectedWallet", () => {
        const walletState = new UseWalletStateMock();
        const signInRequestMock = new SignInRequestDtoMock();

        render(
            <SignInRequestDetails requestTitle="requestTitle" app={signInRequestMock.app} selectedWallet={1} onWalletChange={jest.fn} />,
        );

        expect(screen.getByText(signInRequestMock.app.name)).toBeDefined();
        expect(screen.getByText(signInRequestMock.app.description)).toBeDefined();
        expect(screen.getByText(translate("signWith"))).not.toBeDisabled();
        expect(walletState.mock).toHaveBeenCalled();
    });
});
