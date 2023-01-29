import { Row, Typography } from "@peersyst/react-native-components";

export interface StepsProps {
    index: number;
    length: number;
}

const Steps = ({ index, length }: StepsProps): JSX.Element => (
    <Row>
        <Typography variant="body3Light">{index + 1} </Typography>
        <Typography variant="body3Light">/</Typography>
        <Typography variant="body3Light" light>
            {` ${length}`}
        </Typography>
    </Row>
);

export default Steps;
