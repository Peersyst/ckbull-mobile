import { News } from "mocks/news";
import NewsCard from "module/news/component/display/SimpleNewsCard/NewsCard";
import { fireEvent, render } from "test-utils";
import { Linking } from "react-native";

describe("NewsCard", () => {
    test("Renders correctly", () => {
        const screen = render(<NewsCard news={News} />);
        expect(screen.getByText("Title"));
    });
    test("Goes to link correctly", () => {
        const mockedLinking = jest.fn();
        jest.spyOn(Linking, "openURL").mockImplementation(mockedLinking);
        const screen = render(<NewsCard news={News} />);
        const news = screen.getByText("Title");
        fireEvent.press(news);
        expect(mockedLinking).toHaveBeenCalledWith("link");
    });
});
