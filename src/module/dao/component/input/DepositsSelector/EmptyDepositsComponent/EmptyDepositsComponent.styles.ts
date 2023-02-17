import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const EmptyDepositsComponentRoot = styled(Typography)(({ theme: { palette } }) => {
    const isLight = palette.mode === "light";
    return {
        color: palette.gray[isLight ? 300 : 500],
    };
});
