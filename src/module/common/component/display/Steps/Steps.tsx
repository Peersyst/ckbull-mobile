import { Row } from "@peersyst/react-native-components";
import Typography from "../Typography/Typography";

export interface StepsProps {
    index: number;
    length: number;
}

const Steps = ({ index, length }: StepsProps): JSX.Element => (
    <Row>
        <Typography variant="body3Strong">{index + 1} </Typography>
        <Typography variant="body3Regular">/</Typography>
        <Typography variant="body3Regular" color={(palette) => palette.gray[700]}>{` ${length}`}</Typography>
    </Row>
);

export default Steps;
