import styled from "@peersyst/react-native-styled";
import { ScrollView } from "react-native";

export const SecondaryScreenScrollView = styled(ScrollView, { contentContainerStyle: { padding: 10 } })(({ theme }) => ({
    backgroundColor: theme.palette.component.paper,
}));
