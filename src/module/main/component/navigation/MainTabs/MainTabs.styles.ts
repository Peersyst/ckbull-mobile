import styled from "@peersyst/react-native-styled";
import BaseTabGroup from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup";

export const MainTabsGroup = styled(BaseTabGroup)(({ theme }) => ({
    borderBottomWidth: 1,
    borderColor: theme.palette.overlay[700]["8%"],
    justifyContent: "center",
}));
