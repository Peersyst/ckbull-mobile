import { capitalize } from "@peersyst/react-utils";
import CopyButton from "module/common/component/feedback/CopyButton/CopyButton";
import { render, translate, screen, fireEvent, waitFor } from "test-utils";
import * as ReactNativeComponents from "@peersyst/react-native-components";

describe("CopyButton tests", () => {
    test("Renders correctly", () => {
        render(<CopyButton copyText="test" />);

        expect(screen.getByText(capitalize(translate("copy")))).toBeDefined();
        expect(screen.getByTestId("CopyIcon")).toBeDefined();
    });

    test("Calls setStringAsync from Clipboard when clicked", async () => {
        const mockedCopyToClipboard = jest.fn();
        jest.spyOn(ReactNativeComponents, "useCopyToClipboard").mockReturnValueOnce(mockedCopyToClipboard);

        render(<CopyButton copyText="test" />);

        const copyButton = screen.getByText(capitalize(translate("copy")));

        expect(copyButton).toBeDefined();

        fireEvent.press(copyButton);

        await waitFor(() => expect(mockedCopyToClipboard).toHaveBeenCalled());

        expect(screen.getByText(translate("copied"))).toBeDefined();
        expect(screen.getByTestId("CheckIcon")).toBeDefined();
    });
});
