import { render, translate } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import { UseServiceInstanceMock, UseWalletStateMock } from "test-mocks";
import HomeTabs from "module/home/component/navigation/HomeTabs/HomeTabs";

describe("HomeTabs tests", () => {
    test("Renders correctly", () => {
        new UseWalletStateMock();
        new UseServiceInstanceMock();
        const screen = render(<HomeTabs />);
        expect(screen.getAllByText(translate("transactions"))).toHaveLength(1);
        fireEvent.press(screen.getByText(translate("currencies")));
        expect(screen.getAllByText(translate("currencies"))).toHaveLength(1);
        fireEvent.press(screen.getByText(translate("nfts")));
        expect(screen.getAllByText(translate("nfts"))).toHaveLength(1);
    });
});
