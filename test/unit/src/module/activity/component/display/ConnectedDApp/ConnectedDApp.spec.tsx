import { render, translate } from "test-utils";
import { fireEvent, screen } from "@testing-library/react-native";
import { PartialDappDtoMock } from "mocks/common/activity/partial-dapp-dto.mock";
import ConnectedDApp from "module/activity/component/display/ConnectedDApp/ConnectedDApp";
import * as useCancelableDialog from "module/common/hook/useCancelableDialog";
import { UseServiceInstanceMock } from "test-mocks";

describe("Tests for ConnectedSite", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });

    const dAppMock = new PartialDappDtoMock();
    test("Renders correctly", () => {
        render(<ConnectedDApp dApp={dAppMock} />);

        expect(screen.getByText(dAppMock.name)).toBeDefined();
        expect(screen.getByText(dAppMock.description)).toBeDefined();
    });

    test("Calls onPress when disconnect button is pressed", () => {
        const disconnectMock = jest.fn();

        jest.spyOn(useCancelableDialog, "default").mockReturnValue({
            showCancelableDialog: disconnectMock,
            hideDialog: jest.fn(),
            isDialogOpen: () => false,
        });

        render(<ConnectedDApp dApp={dAppMock} />);

        const disconnectButton = screen.getByText(translate("disconnect"));
        expect(disconnectButton).toBeDefined();
        fireEvent.press(disconnectButton);

        expect(disconnectMock).toHaveBeenCalled();
    });
});
