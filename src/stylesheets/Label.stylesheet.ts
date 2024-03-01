import { Label } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const labelStylesheet = stylesheet(Label)(({ fromTheme }) => ({
    label: {
        color: fromTheme("palette.component.label"),
    },
}));
