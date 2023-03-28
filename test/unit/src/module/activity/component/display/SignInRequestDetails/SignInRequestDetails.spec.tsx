import { render, translate } from "test-utils";
import SignInRequestDetails from "module/activity/component/display/SignInRequestDetails/SignInRequestDetails";
import { screen } from "@testing-library/react-native";
import { UseServiceInstanceMock } from "mocks/common";

describe("SignInRequestDetails tests", () => {
    const mockName = "name";
    const mockImage = "image";
    const mockDescription = "description";

    let useServiceInstanceMock: UseServiceInstanceMock;

    beforeEach(() => {
        useServiceInstanceMock = new UseServiceInstanceMock();
    });

    afterEach(() => useServiceInstanceMock.restore());

    test("Renders correctly without loading", () => {
        render(<SignInRequestDetails name={mockName} image={mockImage} description={mockDescription} />);

        expect(screen.getByText(mockName)).toBeDefined();
        expect(screen.getByText(mockDescription)).toBeDefined();
        expect(screen.getByText(translate("signWith"))).not.toBeDisabled();
    });
});
