import styled from "@peersyst/react-native-styled";
import { Image } from "@peersyst/react-native-components";

export const DAppImage = styled(Image)(({ theme }) => ({
    width: 80,
    height: 80,
    borderRadius: theme.borderRadiusSm,
}));
