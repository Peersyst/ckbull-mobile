import styled from "@peersyst/react-native-styled";
import { Toolbar } from "@peersyst/react-native-components";

export const TOOLBAR_HEIGHT = 64;

export const ToolbarRoot = styled(Toolbar)(({ safeAreaInsets }) => ({
    alignItems: "flex-end",
    height: safeAreaInsets.top + TOOLBAR_HEIGHT,
    paddingHorizontal: 16,
}));
