import { NewDate, NewsImage, NewTitle, SimpleNewsCardRoot, TextCont } from "./SimpleNewsCard.styles";
import { Linking, TouchableWithoutFeedback } from "react-native";
import { NewType } from "module/news/types";
import formatDate from "utils/formatDate";
import { Row, withSkeleton } from "react-native-components";

const SimpleNewsCard = ({ uri, title, date, imageUri }: NewType): JSX.Element => {
    return (
        <TouchableWithoutFeedback onPress={()=> Linking.openURL(uri)}>
            <SimpleNewsCardRoot>
                <Row gap={"5%"} alignItems="flex-start" justifyContent="flex-start">
                    <NewsImage fadeDuration={300} source={{ uri: imageUri }} />
                    <TextCont>
                        <NewTitle variant="caption">{title}</NewTitle>
                    </TextCont>
                </Row>
                <NewDate variant="caption">{formatDate(new Date(date))}</NewDate>
            </SimpleNewsCardRoot>
        </TouchableWithoutFeedback>
    );
};

export default withSkeleton(SimpleNewsCard);
