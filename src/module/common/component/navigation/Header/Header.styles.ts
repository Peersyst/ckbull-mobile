import { IconButton } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";
import Toolbar from "../../layout/Toolbar/Toolbar";

export const HeaderRoot = styled(Toolbar)(({ theme, safeAreaInsets }) => {
    return {
        zIndex: theme.zIndex.header,
        backgroundColor: theme.palette.component.appbar.backgroundColor,
        width: "100%",
        paddingTop: safeAreaInsets.top,
        borderBottomWidth: 1,
        borderBottomColor: theme.palette.component.appbar.borderColor,
        alignItems: "center",
    };
});

export const HeaderSettingsButton = styled(IconButton)(() => ({
    fontSize: 24,
}));
