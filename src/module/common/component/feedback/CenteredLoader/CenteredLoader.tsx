import { ActivityIndicatorProps } from "react-native";
import { Col, Spinner } from "@peersyst/react-native-components";

export type CenteredLoaderProps = Omit<ActivityIndicatorProps, "size">;

const CenteredLoader = ({ style, ...rest }: CenteredLoaderProps): JSX.Element => (
    <Col justifyContent="center" style={[{ height: 250 }, style]}>
        <Spinner size="large" {...rest} />
    </Col>
);

export default CenteredLoader;
