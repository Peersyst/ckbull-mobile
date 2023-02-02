import { createTheme, Theme } from "@peersyst/react-native-components";
import { theme } from "./theme";
import { basePalette, black, blue, green, orange, overlay } from "./basePalette";

//Custom light theme colors
export const red = "#C21212";

//Light status
export const status: Theme["palette"]["status"] = {
    info: blue,
    success: green["200"],
    warning: orange,
    error: red,
};

//Grays
const gray: Theme["palette"]["gray"] = {
    900: "#FFFFFF",
    800: "#EBEBEB",
    700: "#A7A7A7",
    600: "#8C8C8C",
    500: "#707070",
    450: "#494E4E",
    400: "#404040",
    300: "#3F4246",
    200: "#292929",
    100: "#262626",
    0: "#1A1A1A",
};

//Dark theme
const darkTheme = createTheme({
    ...theme,
    palette: {
        ...basePalette,
        red,
        status,
        mode: "dark",
        background: black,
        text: gray[900],
        gray,
        backdrop: overlay["500"]["48%"],
        glass: overlay[100]["32%"],
        component: {
            label: gray[900],
            appbar: black,
            paper: gray[0],
            bottomBar: gray[0],
            borderColor: overlay["900"]["8%"],
            input: {
                placeholderColor: gray[500],
                borderColor: overlay[700]["24%"],
                displayColor: gray[600],
            },
        },
    },
});

export default darkTheme;
