import { Col, ColProps, Typography } from "@peersyst/react-native-components";
import { ViewStyle } from "react-native";

export interface AdviseProps {
    title?: string;
    text?: string;
    style?: ViewStyle;
    gap?: ColProps["gap"];
}

const Advise = ({ title, text, style, gap = 24 }: AdviseProps): JSX.Element => (
    <Col alignItems="center" style={style} gap={gap}>
        {title && (
            <Typography variant="body3Regular" textAlign="center">
                {title}
            </Typography>
        )}
        {text && (
            <Typography variant="body3Light" textAlign="center" light>
                {text}
            </Typography>
        )}
    </Col>
);

export default Advise;
