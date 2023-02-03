import { render } from "test-utils";
import { Typography } from "@peersyst/react-native-components";
import CardModal from "module/common/component/navigation/CardModal/CardModal";
import { screen } from "@testing-library/react-native";
import * as GenesysHooks from "@react-native-community/hooks";

describe("CardModal tests", () => {
    test("Renders correctly", () => {
        const useDimensionsMock = jest.spyOn(GenesysHooks, "useDimensions");

        render(
            <CardModal>
                {{
                    header: <Typography variant="body1">Header</Typography>,
                    body: <Typography variant="body1">Content</Typography>,
                }}
            </CardModal>,
        );

        expect(useDimensionsMock).toHaveBeenCalled();
        expect(screen.getByText("Header")).toBeDefined();
        expect(screen.getByText("Content")).toBeDefined();
    });
});
