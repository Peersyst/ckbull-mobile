import { Row, Typography } from "@peersyst/react-native-components";
import { LightStep } from "./Steps.styles";

export interface StepsProps {
    index: number;
    length: number;
}

const Steps = ({ index, length }: StepsProps): JSX.Element => {
    return (
        <Row>
            <Typography variant="body3Light">{index + 1} </Typography>
            <Typography variant="body3Light">/</Typography>
            <LightStep variant="body3Light">{` ${length}`}</LightStep>
        </Row>
    );
};

export default Steps;
