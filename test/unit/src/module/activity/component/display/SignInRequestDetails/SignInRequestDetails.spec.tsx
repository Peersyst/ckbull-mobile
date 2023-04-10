import { render, translate } from "test-utils";
import SignInRequestDetails from "module/activity/component/display/SignInRequestDetails/SignInRequestDetails";
import { screen } from "@testing-library/react-native";
import { UseServiceInstanceMock, UseWalletStateMock } from "mocks/common";
import { SignInRequestDtoMock } from "mocks/common/activity/sign-in-request-dto.mock";

describe("SignInRequestDetails tests", () => {
    let useServiceInstanceMock: UseServiceInstanceMock;

    beforeEach(() => {
        useServiceInstanceMock = new UseServiceInstanceMock();
    });

    afterEach(() => useServiceInstanceMock.restore());

    test("Renders correctly without loading", () => {
        const walletState = new UseWalletStateMock();
        const signInRequestMock = new SignInRequestDtoMock();

        render(<SignInRequestDetails signInRequest={signInRequestMock} />);

        expect(screen.getByText(signInRequestMock.app.name)).toBeDefined();
        expect(screen.getByText(signInRequestMock.app.description)).toBeDefined();
        expect(screen.getByText(translate("signWith"))).not.toBeDisabled();
        expect(walletState.mock).toHaveBeenCalled();
    });
});
