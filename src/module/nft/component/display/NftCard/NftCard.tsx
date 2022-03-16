import { Nft } from "@peersyst/ckb-peersyst-sdk";
import { Col, Typography } from "react-native-components";
import { NftCardImage, NftCardRoot } from "./NftCard.styles";
import { translate } from "locale";
import formatNumber from "utils/formatNumber";

export type NftCardProps = Nft;

const NftCard = ({ nftName }: NftCardProps): JSX.Element => (
    <NftCardRoot>
        <NftCardImage />
        <Col flex={1} justifyContent="space-between" style={{ paddingVertical: 12 }}>
            <Col gap={6}>
                <Typography variant="body1" fontWeight="bold" numberOfLines={1}>
                    {nftName}
                </Typography>
                <Typography variant="body2" numberOfLines={1}>
                    Artist name
                </Typography>
            </Col>
            <Col gap={3} alignItems="flex-end">
                <Typography variant="caption" light>
                    {translate("bought_for")}:
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    {formatNumber(1500)} CKB
                </Typography>
            </Col>
        </Col>
    </NftCardRoot>
);

export default NftCard;
