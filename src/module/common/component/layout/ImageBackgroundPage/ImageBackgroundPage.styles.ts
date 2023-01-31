import styled from "@peersyst/react-native-styled";
import { ImageBackground } from "react-native";

export const ImageBackgroundPageRoot = styled(ImageBackground, { imageStyle: { minHeight: 220 } })(() => ({
    flex: 1,
}));
