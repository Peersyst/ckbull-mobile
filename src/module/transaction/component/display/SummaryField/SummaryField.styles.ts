import styled from "@peersyst/react-native-styled";
import { Label } from "@peersyst/react-native-components";

export const SummaryFieldRoot = styled(Label, { gap: "1%" })(({ theme }) => ({
    label: {
        color: theme.palette.gray[theme.palette.mode === "light" ? 200 : 500],
    },
}));
