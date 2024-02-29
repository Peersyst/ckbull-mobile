import { render } from "test-utils";
import { Typography } from "@peersyst/react-native-components";
import CardModal from "module/common/component/navigation/CardModal/CardModal";
import { screen } from "@testing-library/react-native";

describe("CardModal tests", () => {
    test("Renders correctly", () => {
        render(
            <CardModal>
                {{
                    header: <Typography variant="body1">Header</Typography>,
                    body: <Typography variant="body1">Content</Typography>,
                }}
            </CardModal>,
        );

        expect(screen.getByText("Header")).toBeDefined();
        expect(screen.getByText("Content")).toBeDefined();
    });
});
