import { Row, Typography } from "@peersyst/react-native-components";
import { useTheme } from "@peersyst/react-native-styled";

export interface StepsProps {
    index: number;
    length: number;
}

const Steps = ({ index, length }: StepsProps): JSX.Element => {
    const theme = useTheme();
    const light = theme.palette.mode;
    console.log(light);

    return (
        <Row>
            <Typography variant="body3Light">{index + 1} </Typography>
            <Typography variant="body3Light">/</Typography>
            <Typography variant="body3Light" style={{ color: theme.palette.gray[light ? 200 : 700] }}>
                {` ${length}`}
            </Typography>
        </Row>
    );
};

export default Steps;
