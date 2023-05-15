import styled from "@peersyst/react-native-styled";
import { View } from "react-native";
import { Paper } from "@peersyst/react-native-components";

export const BaseTabsRoot = styled(Paper)(() => ({
    flex: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 20,
}));

export const BaseIndicator = styled(View)(({ theme }) => ({
    backgroundColor: theme.palette.green[200],
}));
