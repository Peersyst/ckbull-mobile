import { Dialog } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const dialogStylesheet = stylesheet(Dialog)(({ fromTheme }) => ({
    title: {
        textAlign: "center",
    },
    content: {
        textAlign: "center",
        paddingBottom: 24,
        color: fromTheme("palette.gray.700"),
    },
}));
