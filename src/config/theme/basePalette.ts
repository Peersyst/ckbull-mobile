import { Theme } from "@peersyst/react-native-components";
import { ThemeOverlay, ThemeOverlays } from "config/theme/theme.declarations";

//Base colors
export const white = "#FFFFFF";
export const black = "#000000";
export const gold = "#FFC860";
export const red = "#F54565";
export const orange = "#E3935B";
export const blue = "#5F8AFA";
export const purple = "#5735CA";
export const violet = "#6D45F5";

//Base Green
export const green: Theme["palette"]["green"] = {
    200: "#1ED882",
    600: "#52BD8C",
    800: "#34AEAE",
};

//Base gradients
export const gradient: Theme["palette"]["gradient"] = {
    greenDarkGreen: [green["200"], green["800"]],
    greenViolet: [green["200"], violet],
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

//Base theme
export const basePalette: Partial<Theme["palette"]> = {
    primary: green["200"],
    secondary: violet,
    white,
    black,
    gold,
    red,
    orange,
    blue,
    purple,
    violet,
    green,
    gradient,
    wallet: [violet, green["200"], red, gold, purple, blue, orange],
    overlay,
};

export const WALLET_GRADIENT_LENGTH = basePalette?.wallet?.length || 0;
