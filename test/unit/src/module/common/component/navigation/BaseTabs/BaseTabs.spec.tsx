import { render } from "test-utils";
import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import { screen } from "@testing-library/react-native";
import { Typography } from "@peersyst/react-native-components";

describe("BaseTabs tests", () => {
    test("Renders correctly navbar and content", () => {
        render(
            <BaseTabs>
                {{
                    navbar: <Typography variant="body1Strong">Navbar</Typography>,
                    content: <Typography variant="body1Strong">Content</Typography>,
                }}
            </BaseTabs>,
        );

        expect(screen.getByText("Navbar")).toBeDefined();
        expect(screen.getByText("Content")).toBeDefined();
    });
});
