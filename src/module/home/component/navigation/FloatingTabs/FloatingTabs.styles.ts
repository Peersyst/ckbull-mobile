import styled from "@peersyst/react-native-styled";
import { Col, TabGroup as BaseTabGroup } from "@peersyst/react-native-components";

export const FloatingTabsGroup = styled(BaseTabGroup)(() => ({
    gap: 16,
    paddingHorizontal: 10,
}));

export const FloatingTabsNavigatorRoot = styled(Col)(({ theme }) => ({
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.palette.overlay[100]["12%"],
}));
