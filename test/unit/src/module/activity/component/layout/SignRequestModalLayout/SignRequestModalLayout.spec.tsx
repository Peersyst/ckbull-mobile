import SignRequestModalLayout from "module/activity/component/layout/SignRequestModalLayout/SignRequestModalLayout";
import { render, translate } from "test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("SignRequestModalLayout", () => {
    test("Renders correctly", () => {
        render(
            <SignRequestModalLayout
                onReject={jest.fn}
                onSign={jest.fn}
                loading={false}
                disabled={false}
                rejectTitle="rejectTitle"
                rejectMessage="rejectMessage"
            >
                <Typography variant="body2Light">ModalBody</Typography>
            </SignRequestModalLayout>,
        );

        expect(screen.getByText(translate("rejectConnection"))).toBeDefined();
        expect(screen.getByText(translate("or"))).toBeDefined();
        expect(screen.getByText(translate("slideToAccept"))).toBeDefined();
        expect(screen.getByText("ModalBody")).toBeDefined();
    });

    test("Calls onReject when reject button of Dialog is pressed", async () => {
        const mockOnReject = jest.fn();
        render(
            <SignRequestModalLayout
                onReject={mockOnReject}
                onSign={jest.fn}
                loading={false}
                disabled={false}
                rejectTitle="rejectTitle"
                rejectMessage="rejectMessage"
            >
                <Typography variant="body2Light">ModalBody</Typography>
            </SignRequestModalLayout>,
        );

        const rejectButton = screen.getByRole("button", { name: translate("rejectConnection") });

        fireEvent.press(rejectButton);

        await waitFor(() => expect(screen.getByText("rejectTitle")).toBeDefined());
        expect(screen.getByText("rejectMessage")).toBeDefined();

        const rejectConfirmButton = screen.getByRole("button", { name: translate("reject") });

        fireEvent.press(rejectConfirmButton);

        expect(mockOnReject).toHaveBeenCalledTimes(1);
    });
});
