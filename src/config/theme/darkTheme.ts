import { createTheme, Theme } from "@peersyst/react-native-components";
import { theme } from "./theme";
import { basePalette, black, blue, green, orange } from "./basePalette";
import { ThemeOverlay, ThemeOverlays } from "config/theme/theme.declarations";

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

//Overlays
//Overlay100 - #000000
export const overlay100: ThemeOverlay = {
    "6%": "#0000000F",
    "8%": "#00000014",
    "12%": "#0000001F",
    "16%": "#00000029",
    "24%": "#0000003D",
    "32%": "#00000052",
    "48%": "#0000007A",
    "60%": "#00000099",
    "72%": "#000000B7",
    "80%": "#000000CC",
};
//Overlay300 - #262626
export const overlay300: ThemeOverlay = {
    "6%": "#2626260F",
    "8%": "#26262614",
    "12%": "#2626261F",
    "16%": "#26262629",
    "24%": "#2626263D",
    "32%": "#26262652",
    "48%": "#2626267A",
    "60%": "#26262699",
    "72%": "#262626B7",
    "80%": "#262626CC",
};
//Overlay500 - #292929
export const overlay500: ThemeOverlay = {
    "6%": "#2929290F",
    "8%": "#29292914",
    "12%": "#2929291F",
    "16%": "#29292929",
    "24%": "#2929293D",
    "32%": "#29292952",
    "48%": "#2929297A",
    "60%": "#29292999",
    "72%": "#292929B7",
    "80%": "#292929CC",
};
//Overlay700 - #a7a7a7
export const overlay700: ThemeOverlay = {
    "6%": "#A7A7A70F",
    "8%": "#A7A7A714",
    "12%": "#A7A7A71F",
    "16%": "#A7A7A729",
    "24%": "#A7A7A73D",
    "32%": "#A7A7A752",
    "48%": "#A7A7A77A",
    "60%": "#A7A7A799",
    "72%": "#A7A7A7B7",
    "80%": "#A7A7A7CC",
};
//Overlay900 - #FFFFFF
export const overlay900: ThemeOverlay = {
    "6%": "#FFFFFF0F",
    "8%": "#FFFFFF14",
    "12%": "#FFFFFF1F",
    "16%": "#FFFFFF29",
    "24%": "#FFFFFF3D",
    "32%": "#FFFFFF52",
    "48%": "#FFFFFF7A",
    "60%": "#FFFFFF99",
    "72%": "#FFFFFFB8",
    "80%": "#FFFFFFCC",
};

export const overlay: ThemeOverlays = {
    100: overlay100,
    300: overlay300,
    500: overlay500,
    700: overlay700,
    900: overlay900,
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
        overlay,
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
                backgroundColor: gray[0],
            },
        },
    },
});

export default darkTheme;
