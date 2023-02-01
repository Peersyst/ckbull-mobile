import styled from "@peersyst/react-native-styled";
import { Col } from "@peersyst/react-native-components";
import BaseTabGroup from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup";

export const FloatingTabsGroup = styled(BaseTabGroup)(() => ({
    paddingHorizontal: 10,
}));

export const FloatingTabsNavigatorRoot = styled(Col)(({ theme }) => ({
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.palette.overlay[100]["12%"],
}));
