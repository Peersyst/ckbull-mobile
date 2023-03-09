import styled from "@peersyst/react-native-styled";
import Toolbar from "../../layout/Toolbar/Toolbar";

export const NavbarHeaderRoot = styled(Toolbar)(({ theme }) => ({
    paddingHorizontal: 0,
    backgroundColor: theme.palette.component.paper,
}));
