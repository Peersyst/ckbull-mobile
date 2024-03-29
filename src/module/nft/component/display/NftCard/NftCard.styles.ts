import styled from "@peersyst/react-native-styled";
import { Image } from "@peersyst/react-native-components";

const NFT_CARD_WIDTH = 88;

export const NftCardImage = styled(Image)(({ theme: { palette: p, borderRadiusXs } }) => ({
    borderRadius: borderRadiusXs,
    backgroundColor: p.gray[300],
    width: NFT_CARD_WIDTH,
    height: NFT_CARD_WIDTH,
}));
