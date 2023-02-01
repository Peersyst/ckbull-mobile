import { render, translate } from "test-utils";
import ActivityStatus from "module/activity/component/display/ActivityStatus/ActivityStatus";
import { screen } from "@testing-library/react-native";

describe("Tests for ActivityStatus", () => {
    test("Renders correctly without light", () => {
        const status = "connected";

        render(<ActivityStatus message={status} statusColor={"red"} light={false} />);

        expect(screen.getByText(translate(status))).toHaveStyle({ color: "red" });
    });

    test("Renders correctly with light", () => {
        const status = "connected";

        render(<ActivityStatus message={status} statusColor={"red"} light={true} />);

        expect(screen.getByText(translate(status))).not.toHaveStyle({ color: "red" });
    });
});
