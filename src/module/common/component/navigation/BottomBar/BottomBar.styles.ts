import styled from "@peersyst/react-native-styled";
import { Row } from "@peersyst/react-native-components";

export const BottomBarRoot = styled(Row, { justifyContent: "space-around" })(({ theme, safeAreaInsets }) => ({
    backgroundColor: theme.palette.component.bottomBar.backgroundColor,
    borderTopWidth: theme.borderWidth,
    borderTopColor: theme.palette.component.bottomBar.borderColor,
    paddingHorizontal: 10,
    paddingBottom: safeAreaInsets.bottom + 8,
    paddingTop: 8,
}));
