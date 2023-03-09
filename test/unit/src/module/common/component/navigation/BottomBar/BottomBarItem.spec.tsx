import { DaoIcon } from "icons";
import BottomBarItem from "module/common/component/navigation/BottomBar/BottomBarItem/BottomBarItem";
import { render, fireEvent } from "test-utils";

describe("Test for the BottomBarItem", () => {
    test("Renders correctly", () => {
        const mockedOnPress = jest.fn();

        const screen = render(<BottomBarItem onPress={mockedOnPress} isActive={false} Icon={<DaoIcon />} label={"Dao"} />);
        expect(screen.getByText("Dao")).toBeDefined();
        const icon = screen.getByTestId("DaoIcon");
        expect(icon).toBeDefined();
        fireEvent.press(icon);
        expect(mockedOnPress).toHaveBeenCalled();
    });
});
