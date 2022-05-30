import { render } from "test-utils";
import AdvancedSettingsScreen from "module/settings/screen/AdvancedSettingsScreen";
import { translate } from "locale";

describe("AdvancedSettingsScreen tests", () => {
    test("Renders correctly", () => {
        const screen = render(<AdvancedSettingsScreen navigation={jest.fn() as any} />);
        expect(screen.getByText(translate("advanced_settings")));
        expect(screen.getByText(translate("change_node", { network: translate("testnet") })));
    });
});
