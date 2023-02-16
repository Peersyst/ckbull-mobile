import styled from "@peersyst/react-native-styled";
import { Paper } from "@peersyst/react-native-components";

export const SettingsCardRoot = styled(Paper, { elevation: 0 })(() => ({
    paddingHorizontal: 15,
    minHeight: 55,
    borderRadius: 0,
    justifyContent: "center",
}));
