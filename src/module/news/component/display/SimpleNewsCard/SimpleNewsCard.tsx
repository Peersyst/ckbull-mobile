import { NewDate, NewsImage, NewTitle, SimpleNewsCardRoot, TextCont } from "./SimpleNewsCard.styles";
import { Linking, TouchableWithoutFeedback } from "react-native";
import formatDate from "utils/formatDate";
import { Row, WithSkeleton, withSkeleton } from "react-native-components";
import { formatNews } from "module/news/utils/formatNews";
import { NewsDto } from "module/news/types";

const SimpleNewsCard = ({ loading, ...news }: WithSkeleton<NewsDto>): JSX.Element => {
    const { uri, title, imageUri, date } = formatNews(news);
    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL(uri)}>
            <SimpleNewsCardRoot>
                <Row gap={"5%"} alignItems="flex-start" justifyContent="flex-start">
                    {!loading && <NewsImage source={{ uri: imageUri }} />}
                    <TextCont>
                        <NewTitle variant="body2">{title}</NewTitle>
                    </TextCont>
                </Row>
                <NewDate variant="caption">{formatDate(new Date(date))}</NewDate>
            </SimpleNewsCardRoot>
        </TouchableWithoutFeedback>
    );
};

export default withSkeleton(SimpleNewsCard);
