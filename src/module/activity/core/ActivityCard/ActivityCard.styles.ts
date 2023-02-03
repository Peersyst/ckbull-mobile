import styled from "@peersyst/react-native-styled";
import { Image, Row } from "@peersyst/react-native-components";

export const ActivityCardRoot = styled(Row)(() => ({
    height: 92,
    justifyContent: "space-between",
    alignItems: "center",
}));

export const ActivityDisplay = styled(Image)(({ theme }) => ({
    width: 56,
    height: 56,
    borderRadius: theme.borderRadiusSm,
}));
