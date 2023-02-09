import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import { TouchableWithoutFeedback } from "react-native";
import { NftCardImage } from "./NftCard.styles";
import { NftCardProps } from "./NftCard.types";
import { placeholder_image } from "images";

const NftCard = ({ nft }: NftCardProps): JSX.Element => {
    const t = useTranslate();
    const {
        nftName,
        tokenUri,
        tokenId,
        total,
        data: { description, title },
    } = nft;

    return (
        <TouchableWithoutFeedback>
            <MainListCard gap="6.5%">
                <NftCardImage source={tokenUri ? { uri: tokenUri } : placeholder_image} />
                <Col flex={1} gap={12} justifyContent="center">
                    <Col gap={2} flex={1}>
                        {title && (
                            <Typography variant="body1Strong" numberOfLines={1}>
                                {title}
                            </Typography>
                        )}
                        {description && (
                            <Typography variant="body1Strong" numberOfLines={1}>
                                {description}
                            </Typography>
                        )}
                        {tokenId && (
                            <Typography variant="body3Strong" numberOfLines={1} color="primary">
                                {tokenId}
                            </Typography>
                        )}
                    </Col>
                </Col>
            </MainListCard>
        </TouchableWithoutFeedback>
    );
};

export default NftCard;
