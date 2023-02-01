import { createTheme, Theme } from "@peersyst/react-native-components";
import { basePalette, blue, green, orange, overlay } from "./basePalette";
import { theme } from "./theme";

//Custom light theme colors
export const red = "#FF1717";

export const status: Theme["palette"]["status"] = {
    info: blue,
    success: green["200"],
    warning: orange,
    error: red,
};

const gray: Theme["palette"]["gray"] = {
    0: "#FFFFFF",
    100: "#EBEBEB",
    200: "#A7A7A7",
    300: "#8C8C8C",
    400: "#707070",
    450: "#494E4E",
    500: "#404040",
    600: "#8C8C8C",
    700: "#292929",
    800: "#262626",
    900: "#1A1A1A",
};

const lightTheme = createTheme({
    ...theme,
    palette: {
        ...basePalette,
        red,
        status,
        mode: "dark",
        background: gray[0],
        text: gray[700],
        gray,
        backdrop: overlay["500"]["48%"],
        glass: overlay[900]["32%"],
        component: {
            appbar: gray[700],
            paper: gray[0],
            bottomBar: gray[0],
            borderColor: overlay["300"]["24%"],
            label: gray[700],
            input: {
                placeholderColor: gray[200],
                borderColor: overlay[300]["24%"],
                displayColor: gray[600],
            },
        },
    },
});

export default lightTheme;
