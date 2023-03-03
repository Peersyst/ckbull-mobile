import styled from "@peersyst/react-native-styled";
import { Row } from "@peersyst/react-native-components";
import { config } from "config";

export const BOTTOM_BAR_VERTICAL_PADDING = config.enableSignerApp ? 8 : 12;
export const BOTTOM_BAR_HORIZONTAL_PADDING = 10;

export const BottomBarRoot = styled(Row, { justifyContent: "space-around" })(({ theme, safeAreaInsets }) => ({
    backgroundColor: theme.palette.component.bottomBar.backgroundColor,
    borderTopWidth: theme.borderWidth,
    borderTopColor: theme.palette.component.bottomBar.borderColor,
    paddingHorizontal: BOTTOM_BAR_HORIZONTAL_PADDING,
    paddingBottom: safeAreaInsets.bottom + BOTTOM_BAR_VERTICAL_PADDING,
    paddingTop: BOTTOM_BAR_VERTICAL_PADDING,
}));
