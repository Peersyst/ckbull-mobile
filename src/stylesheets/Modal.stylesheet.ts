import { Modal } from "@peersyst/react-native-components";
import { stylesheet } from "@peersyst/react-native-styled";

export const modalStylesheet = stylesheet(Modal)(({ fromTheme }) => ({
    backgroundColor: fromTheme("palette.component.paper"),
}));
