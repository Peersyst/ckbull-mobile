import { SwipeButton } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const swipeButtonStylesheet = stylesheet(SwipeButton)(({ fromTheme }) => ({
    height: 52,
    borderRadius: 52,
    backgroundGradient: {
        colors: [fromTheme("palette.green.200"), fromTheme("palette.green.600")],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 0 },
    },
    ...fromTheme("typography.body2Regular"),
    color: fromTheme("palette.white"),
    track: {
        padding: 6,
    },
    thumb: {
        backgroundColor: fromTheme("palette.white"),
        color: fromTheme("palette.primary"),
    },
    disabled: {
        backgroundGradient: {
            colors: [fromTheme("palette.disabled"), fromTheme("palette.disabled")],
        },
    },
}));
