import styled from "@peersyst/react-native-styled";
import { Col, TabGroup as BaseTabGroup } from "@peersyst/react-native-components";

export const FloatingTabsGroup = styled(BaseTabGroup)(({ theme }) => ({
    gap: 16,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.palette.overlay[100]["12%"],
}));

export const FloatingTabsNavigatorRoot = styled(Col)(() => ({
    alignItems: "center",
    marginVertical: 20,
}));
