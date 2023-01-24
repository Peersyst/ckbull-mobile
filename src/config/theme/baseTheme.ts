import { Theme } from "@peersyst/react-native-components";

//Base colors
export const blue = "#5F8AFA";
export const green = "#1ED882";
export const verdigris = "#34AEAE";
export const gold = "#FFC860";
export const red = "#F54565";
export const aqua = "#4FD1D9";
export const purple = "#5735CA";
export const lilac = "#A463B0";
export const orange = "#E3935B";

//Base gradients
export const gradient: Theme["palette"]["gradient"] = {
    greenBlue: [green, blue],
    greenVerdigris: [green, verdigris],
};

export const statusTheme: Theme["palette"]["status"] = {
    info: blue,
    success: green,
    warning: orange,
    error: red,
};

export const baseTheme: Partial<Theme["palette"]> = {
    primary: blue,
    white: "#FFFFFF",
    black: "#000000",
    verdigris,
    blue,
    green,
    gold,
    red,
    aqua,
    purple,
    lilac,
    orange,
    gradient,
    wallet: [blue, green, red, gold, aqua, purple, lilac, orange],
};

export const WALLET_GRADIENT_LENGTH = baseTheme?.wallet?.length || 0;
