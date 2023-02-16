import { Theme } from "@peersyst/react-native-components";

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
    400: "#32B2AA",
    600: "#34AEAE",
    800: "#52BD8C",
};

//Base gradients
export const gradient: Theme["palette"]["gradient"] = {
    greenDarkGreen: [green["200"], green["600"]],
    greenViolet: [green["200"], violet],
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
};

export const WALLET_GRADIENT_LENGTH = basePalette?.wallet?.length || 0;
