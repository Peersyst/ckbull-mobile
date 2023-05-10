import AccountSlider from "module/home/component/core/AccountSlider";
import { render } from "test-utils";
import { UseServiceInstanceMock, UseWalletStateMock } from "test-mocks";

describe("Test for the Home Slider", () => {
    const { state } = new UseWalletStateMock();
    new UseServiceInstanceMock();
    test("Renders correctly with cells", () => {
        const screen = render(<AccountSlider />);
        expect(screen.getAllByText(state.wallets[0].name)).toBeDefined();
        expect(screen.getAllByText(state.wallets[1].name)).toBeDefined();
    });
});
