import styled from "@peersyst/react-native-styled";
import { Image, Row, Typography } from "@peersyst/react-native-components";
import { ChevronRightIcon } from "icons";

export const ActivityCardRoot = styled(Row)(() => ({
    height: 92,
    alignItems: "center",
}));

export const ActivityDisplay = styled(Image)(({ theme }) => ({
    width: 56,
    height: 56,
    borderRadius: theme.borderRadiusSm,
}));

export const DefaultActivityAction = styled(ChevronRightIcon)(({ theme }) => ({
    color: theme.palette.overlay[theme.palette.mode === "light" ? 300 : 700]["48%"],
}));

export const Details = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.gray[200] : theme.palette.gray[700],
}));
