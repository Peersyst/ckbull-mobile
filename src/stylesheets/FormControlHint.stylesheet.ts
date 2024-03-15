import { FormControlHint } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const formControlHintStylesheet = stylesheet(FormControlHint)(({ fromTheme }) => ({
    fontSize: 14,
    color: fromTheme("palette.gray.300"),
}));
