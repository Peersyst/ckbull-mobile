import { NewsImage, NewsCardRoot } from "./NewsCard.styles";
import { Linking, TouchableWithoutFeedback, ViewStyle } from "react-native";
import { Col, Row, Typography, withSkeleton } from "@peersyst/react-native-components";
import { formatNews } from "module/news/utils/formatNews";
import { NewsDto } from "module/news/types";
import useFormatDate from "module/common/hook/useFormatDate";
import { placeholder_image } from "images";

export interface SimpleNewsCardProps {
    news: NewsDto;
    style?: ViewStyle;
}

const NewsCard = ({ news, style }: SimpleNewsCardProps): JSX.Element => {
    const { uri, title, imageUri, date } = formatNews(news);
    const formattedDate = useFormatDate();

    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL(uri)}>
            <NewsCardRoot elevation={0} style={style}>
                <Row gap={12} alignItems="center">
                    <NewsImage source={imageUri ? { uri: imageUri } : placeholder_image} />
                    <Col gap={4} flex={1} style={{ paddingRight: 16 }}>
                        <Typography variant="body3Light" light>
                            {formattedDate(date)}
                        </Typography>
                        <Typography variant="body3Regular" numberOfLines={2} adjustsFontSizeToFit minimumFontScale={1}>
                            {title}
                        </Typography>
                    </Col>
                </Row>
            </NewsCardRoot>
        </TouchableWithoutFeedback>
    );
};

export default withSkeleton(NewsCard);
