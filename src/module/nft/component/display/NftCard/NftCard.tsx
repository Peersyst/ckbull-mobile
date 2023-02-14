import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import { TouchableWithoutFeedback } from "react-native";
import { NftCardImage } from "./NftCard.styles";
import { NftCardProps } from "./NftCard.types";

const NftCard = ({ nft }: NftCardProps): JSX.Element => {
    const {
        nftName,
        tokenUri,
        total,
        data: { operator },
    } = nft;
    const translate = useTranslate();
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
                        {operator && (
                            <Typography variant="body3Strong" numberOfLines={1} color="green.200">
                                {operator}
                            </Typography>
                        )}
                    </Col>
                    {total && (
                        <Col>
                            <Typography variant="body4Regular" numberOfLines={1} color="gray.200">
                                {translate("bought_for")}
                            </Typography>
                            <Typography variant="body3Strong" numberOfLines={1} color="gray.700">
                                ${total}
                            </Typography>
                        </Col>
                    )}
                </Col>
            </MainListCard>
        </TouchableWithoutFeedback>
    );
};

export default NftCard;
