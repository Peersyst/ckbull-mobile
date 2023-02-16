import { Col, Row, Typography } from "@peersyst/react-native-components";
import Container from "module/common/component/display/Container/Container";
import { useTranslate } from "module/common/hook/useTranslate";
import Fee from "module/transaction/component/display/Fee/Fee";
import { TouchableWithoutFeedback } from "react-native";
import { useAssetSelect } from "../hook/useAssetSelect";
import { ChevronDownIcon } from "./AssetSelectDisplay.styles";
import AssetValueDisplay from "./AssetValueDisplay";

export interface AssetSelectDisplayProps {
    onPress: () => void;
    fee?: string;
}

const AssetSelectDisplay = ({ onPress, fee }: AssetSelectDisplayProps) => {
    const translate = useTranslate();
    const { asset } = useAssetSelect();
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container style={{ width: "100%" }}>
                <Col alignItems="center" flex={1} gap="2%">
                    <Row alignItems="center" gap={5} justifyContent="center" style={{ maxWidth: "100%" }}>
                        {asset?.type ? (
                            <AssetValueDisplay variant="title4Regular" />
                        ) : (
                            <Typography variant="body1Regular">{translate("select_asset")}</Typography>
                        )}
                        <ChevronDownIcon />
                    </Row>
                    <Fee typographyVariant="body2" fee={fee} />
                </Col>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default AssetSelectDisplay;
