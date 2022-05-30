import styled from "@peersyst/react-native-styled";
import { ChevronRightIcon } from "icons";
import { Row } from "react-native-components";

export const ArrowRightIcon = styled(ChevronRightIcon)(({ theme }) => ({
    fontSize: 12,
    color: theme.palette.black,
}));

export const SettingsMenuRoot = styled(Row, { justifyContent: "space-between", alignItems: "center" })(() => ({
    height: 40,
}));
