import { capitalize } from "@peersyst/react-utils";
import CopyButton from "module/common/component/feedback/CopyButton/CopyButton";
import { render, translate, screen, fireEvent, waitFor } from "test-utils";
import * as Clipboard from "expo-clipboard";
import { UseToastMock } from "test-mocks";

describe("CopyButton tests", () => {
    test("Renders correctly", () => {
        render(<CopyButton copyText="test" />);

        expect(screen.getByText(capitalize(translate("copy")))).toBeDefined();
        expect(screen.getByTestId("CopyIcon")).toBeDefined();
    });

    test("Calls setStringAsync from Clipboard when clicked", async () => {
        const mockCopy = jest.spyOn(Clipboard, "setStringAsync");

        render(<CopyButton copyText="test" />);

        const copyButton = screen.getByText(capitalize(translate("copy")));

        expect(copyButton).toBeDefined();

        fireEvent.press(copyButton);

        await waitFor(() => expect(mockCopy).toHaveBeenCalledWith("test"));

        expect(screen.getByText(translate("copied"))).toBeDefined();
        expect(screen.getByTestId("CheckIcon")).toBeDefined();
    });

    test("Shows toast when showToast is true", async () => {
        const toastMock = new UseToastMock();

        render(<CopyButton copyText="test" showToast />);

        const copyButton = screen.getByText(capitalize(translate("copy")));

        expect(copyButton).toBeDefined();

        fireEvent.press(copyButton);

        await waitFor(() => expect(toastMock.showToast).toHaveBeenCalled());
    });
});
