import { FormControlLabel } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const formControlLabelStylesheet = stylesheet(FormControlLabel)(() => ({
    label: {
        maxWidth: "100%",
    },
}));
