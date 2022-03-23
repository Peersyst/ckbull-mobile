import { NewDate, NewsImage, NewTitle, SimpleNewsCardRoot, TextCont } from "../SimpleNewsCard/SimpleNewsCard.styles";
import { Linking, TouchableWithoutFeedback } from "react-native";
import { NewType } from "module/news/types";
import formatDate from "utils/formatDate";
import { Col, Row, withSkeleton } from "react-native-components";
import { BigNewsDate, BigNewsImage } from "./BigNewsCard.styles";

const BigNewsCard = ({ uri, title, date, imageUri }: NewType): JSX.Element => {
    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL(uri)}>
            <SimpleNewsCardRoot>
                <Col gap={"3%"}>
                    <BigNewsImage fadeDuration={300} source={{ uri: imageUri }} />
                    <NewTitle variant="caption">{title}</NewTitle>
                    <BigNewsDate variant="caption">{formatDate(new Date(date))}</BigNewsDate>
                </Col>
            </SimpleNewsCardRoot>
        </TouchableWithoutFeedback>
    );
};

export default withSkeleton(BigNewsCard);