import { Typography } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const LightStep = styled(Typography)(({ theme: { palette } }) => {
    const isLight = palette.mode === "light";
    return {
        color: isLight ? palette.text : palette.gray[700],
    };
});
