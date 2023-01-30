import { render } from "test-utils";
import BaseTabs from "module/common/component/navigation/BaseTabs/BaseTabs";
import Typography from "module/common/component/display/Typography/Typography";
import { screen } from "@testing-library/react-native";

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
