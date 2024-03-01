import { Typography } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const typographyStylesheet = stylesheet(Typography)(({ fromTheme }) => ({
    light: {
        color: fromTheme("palette.mode").toString() === "light" ? fromTheme("palette.gray.200") : fromTheme("palette.gray.600"),
        opacity: 1,
    },
}));
