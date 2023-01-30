import { Col, Row } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import Typography from "module/common/component/display/Typography/Typography";

interface BaseActivityProps {
    children: { header?: ReactElement; statusDetail: ReactElement; actionable?: ReactElement };
    title: string;
}

const BaseActivity = ({ children: { header, statusDetail, actionable }, title }: BaseActivityProps): JSX.Element => {
    return (
        <Row flex={1} justifyContent="center">
            <Row gap={16}>
                {header}
                <Col flex={1} justifyContent="flex-start">
                    <Typography variant="body1Regular">{title}</Typography>
                    {statusDetail}
                </Col>
            </Row>
            <Col>{actionable}</Col>
        </Row>
    );
};

export default BaseActivity;
