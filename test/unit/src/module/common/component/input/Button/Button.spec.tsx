import { render } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import Button from "module/common/component/input/Button/Button";
import { theme } from "module/common/style/theme";

describe("Button tests", () => {
    test("Renders correctly + outlined + dark appearance", () => {
        const screen = render(<Button>Press me</Button>);
        expect(screen.getByText("Press me")).toBeDefined();
        expect(screen.getByRole("button").props.style.backgroundColor).toEqual(theme.palette.black);
    });
    test("Renders correctly light appearance", () => {
        const screen = render(
            <Button variant="outlined" appearance="light">
                Press me
            </Button>,
        );
        expect(screen.getByRole("button").props.style.outlined.borderColor).toEqual(theme.palette.white);
    });
    test("Renders correctly gray appearance", () => {
        const screen = render(
            <Button variant="outlined" appearance="gray">
                Press me
            </Button>,
        );
        expect(screen.getByRole("button").props.style.outlined.borderColor).toEqual(theme.palette.darkGray);
    });
    test("onPress is called", () => {
        const onPress = jest.fn();
        const screen = render(<Button onPress={onPress}>Press me</Button>);

        const button = screen.getByText("Press me");
        fireEvent.press(button);
        expect(onPress).toHaveBeenCalled();
    });
});
