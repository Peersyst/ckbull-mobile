import styled from "@peersyst/react-native-styled";
import { Row } from "@peersyst/react-native-components";
import { config } from "config";

export const VERTICAL_PADDING = config.enableSignerApp ? 8 : 12;

export const BottomBarRoot = styled(Row, { justifyContent: "space-around" })(({ theme, safeAreaInsets }) => ({
    backgroundColor: theme.palette.component.bottomBar.backgroundColor,
    borderTopWidth: theme.borderWidth,
    borderTopColor: theme.palette.component.bottomBar.borderColor,
    paddingHorizontal: 10,
    paddingBottom: safeAreaInsets.bottom + VERTICAL_PADDING,
    paddingTop: VERTICAL_PADDING,
}));
