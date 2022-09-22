import { Col } from "@peersyst/react-native-components";
import { empty_folder } from "asset/image";
import { EmptyListComponentImage, EmptyListComponentText } from "./EmptyListComponent.styles";
import { translate } from "locale";

const EmptyListComponent = (): JSX.Element => {
    return (
        <Col alignItems="center" style={{ marginTop: "10%" }}>
            <EmptyListComponentText variant="body1" fontWeight="bold" textTransform="uppercase">
                {translate("nothing_to_show")}
            </EmptyListComponentText>
            <EmptyListComponentImage source={empty_folder} accessibilityRole="image" />
        </Col>
    );
};

export default EmptyListComponent;
