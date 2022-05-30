import { render } from "test-utils";
import AddNodeButton from "module/settings/components/input/AddNodeButton/AddNodeButton";
import { fireEvent } from "@testing-library/react-native";
import { translate } from "locale";

describe("AddNodeButton tests", () => {
    test("Renders correctly", () => {
        const screen = render(<AddNodeButton onNodeAdded={() => undefined} />);
        fireEvent.press(screen.getAllByText(translate("add_a_node"))[0]);
        expect(screen.getByPlaceholderText(translate("introduce_a_node_url")));
    });
});
