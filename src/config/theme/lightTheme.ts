import { createTheme, Theme } from "@peersyst/react-native-components";
import { basePalette, blue, green, orange, white } from "./basePalette";
import { theme } from "./theme";
import { ThemeOverlay, ThemeOverlays } from "config/theme/theme.declarations";

//Custom light theme colors
export const red = "#FF1717";

export const status: Theme["palette"]["status"] = {
    info: blue,
    success: green["200"],
    warning: orange,
    error: red,
};

export const gray: Theme["palette"]["gray"] = {
    0: "#FFFFFF",
    50: "#D3D3D3",
    100: "#EBEBEB",
    200: "#A7A7A7",
    300: "#8C8C8C",
    400: "#707070",
    450: "#494E4E",
    500: "#404040",
    600: "#3F4246",
    700: "#292929",
    800: "#262626",
    900: "#1A1A1A",
};

//Overlays
//Overlay900 - #000000
export const overlay900: ThemeOverlay = {
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
//Overlay700 - #262626
export const overlay700: ThemeOverlay = {
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
//Overlay300 - #a7a7a7
export const overlay300: ThemeOverlay = {
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
//Overlay100 - #FFFFFF
export const overlay100: ThemeOverlay = {
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

const lightTheme = createTheme({
    ...theme,
    palette: {
        ...basePalette,
        red,
        status,
        mode: "light",
        background: gray[900],
        text: gray[700],
        gray,
        overlay,
        backdrop: overlay["500"]["48%"],
        glass: overlay[900]["32%"],
        component: {
            appbar: { backgroundColor: gray[900], borderColor: overlay[100]["8%"] },
            paper: white,
            navbar: {
                borderColor: overlay[700]["8%"],
            },
            bottomBar: {
                backgroundColor: white,
                borderColor: overlay[700]["8%"],
            },
            borderColor: overlay["300"]["24%"],
            label: gray[700],
            input: {
                placeholderColor: gray[200],
                borderColor: overlay[300]["24%"],
                displayColor: gray[600],
                backgroundColor: gray[0],
                hintColor: gray[200],
            },
        },
    },
});

export default lightTheme;
