import styled from "@peersyst/react-native-styled";
import { ImageBackground, View } from "react-native";

export const ImageBackgroundPageRoot = styled(View)(() => ({
    flex: 1,
}));

export const ImageBackgroundBase = styled(ImageBackground, { imageStyle: { minHeight: 220 } })(({ dimensions }) => ({
    overflow: "hidden",
    height: dimensions.height,
    minHeight: 220,
}));
