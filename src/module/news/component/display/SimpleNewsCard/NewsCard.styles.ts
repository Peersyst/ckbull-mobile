import styled from "@peersyst/react-native-styled";
import { Paper, Image } from "@peersyst/react-native-components";

export const NewsCardRoot = styled(Paper)(({ theme }) => ({
    borderRadius: theme.borderRadiusSm,
}));

export const NewsImage = styled(Image)(({ theme, dimensions }) => {
    const size = Math.min(dimensions.width * 0.25, 120);

    return {
        width: size,
        height: size,
        backgroundColor: theme.palette.gray[100],
        borderRadius: theme.borderRadiusXs,
    };
});
