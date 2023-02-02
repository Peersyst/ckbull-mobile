import { Col, Typography } from "@peersyst/react-native-components";
import { ViewStyle } from "react-native";

export interface AdviseProps {
    title: string;
    text?: string;
    style?: ViewStyle;
}

const Advise = ({ title, text, style }: AdviseProps): JSX.Element => (
    <Col alignItems="center" style={style} gap={24}>
        <Typography variant="body3Strong" textAlign="center">
            {title}
        </Typography>
        {text && (
            <Typography variant="body3Regular" textAlign="center" color="gray.450">
                {text}
            </Typography>
        )}
    </Col>
);

export default Advise;
