import { Col, Typography } from "@peersyst/react-native-components";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import { TouchableWithoutFeedback } from "react-native";
import { NftCardImage } from "./NftCard.styles";
import { NftCardProps } from "./NftCard.types";

const NftCard = ({ nft }: NftCardProps): JSX.Element => {
    const {
        nftName,
        tokenUri,
        total,
        tokenId,
        data: { description },
    } = nft;
    return (
        <TouchableWithoutFeedback>
            <MainListCard gap={24} style={{ marginTop: 24, height: 100 }}>
                <NftCardImage source={{ uri: tokenUri }} />
                <Col gap={10} flex={1}>
                    <Col>
                        {nftName && (
                            <Typography variant="body2Strong" numberOfLines={1}>
                                {nftName}
                            </Typography>
                        )}
                        {description && (
                            <Typography variant="body3Strong" numberOfLines={1} color="green.200">
                                {description}
                            </Typography>
                        )}
                    </Col>
                    {tokenId && total && (
                        <Col>
                            <Typography variant="body3Strong" numberOfLines={1} color="gray.700">
                                {`${tokenId}/${total}`}
                            </Typography>
                        </Col>
                    )}
                </Col>
            </MainListCard>
        </TouchableWithoutFeedback>
    );
};

export default NftCard;
