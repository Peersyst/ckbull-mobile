import styled from "@peersyst/react-native-styled";
import { Row } from "@peersyst/react-native-components";

export const BottomBarRoot = styled(Row, { justifyContent: "space-around", alignItems: "center" })(({ theme, safeAreaInsets }) => ({
    backgroundColor: theme.palette.component.bottomBar,
    borderTopWidth: theme.borderWidth,
    borderTopColor: theme.palette.overlay[700]["40%"],
    paddingHorizontal: 32,
    paddingBottom: safeAreaInsets.bottom + 10,
    paddingTop: 13,
}));
